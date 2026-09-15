import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DRIVE_ID_PATTERN = /^[A-Za-z0-9_-]{10,200}$/;
const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

function detectImageMime(bytes: Uint8Array): string | null {
  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return "image/png";
  }

  if (
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff
  ) {
    return "image/jpeg";
  }

  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return "image/webp";
  }

  return null;
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  if (!DRIVE_ID_PATTERN.test(id)) {
    return new NextResponse("Invalid image id", { status: 400 });
  }

  try {
    const driveUrl = `https://drive.google.com/uc?export=download&id=${encodeURIComponent(id)}`;
    const upstream = await fetch(driveUrl, {
      redirect: "follow",
      cache: "no-store",
      headers: {
        "User-Agent": "TakeMockTest-SocialMedia-ImageProxy/1.0",
      },
    });

    if (!upstream.ok) {
      return new NextResponse("Image unavailable", { status: 502 });
    }

    const buffer = await upstream.arrayBuffer();

    if (buffer.byteLength === 0 || buffer.byteLength > MAX_IMAGE_BYTES) {
      return new NextResponse("Invalid image size", { status: 413 });
    }

    const bytes = new Uint8Array(buffer);
    const mime = detectImageMime(bytes);

    if (!mime) {
      return new NextResponse("Upstream file is not a supported image", {
        status: 415,
      });
    }

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": mime,
        "Content-Length": String(buffer.byteLength),
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
        "X-Content-Type-Options": "nosniff",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch {
    return new NextResponse("Image fetch failed", { status: 502 });
  }
}
