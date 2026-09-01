from pathlib import Path
p=Path('src/components/ExamCard.tsx'); s=p.read_text()
if "'University & Science':" not in s:
    block="""  'University & Science': {
    surface: 'bg-[#E4F0FF]',
    iconText: 'text-[#245B9B]',
    icon: (
      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" className=\"h-6 w-6\">
        <path d=\"M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Zm3 0v16m3-12h5m-5 4h5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.7\" />
      </svg>
    ),
  },
"""
    s=s.replace("  Management: {",block+"  Management: {")
p.write_text(s)

p=Path('src/lib/questions.ts'); s=p.read_text()
if "  'iiser-iat': []," not in s:
    s=s.replace("export const QUESTION_BANK: Record<ExamSlug, Question[]> = {\n", "export const QUESTION_BANK: Record<ExamSlug, Question[]> = {\n  'iiser-iat': [],\n")
if "testId.includes('iiser-iat/iat-full-mock')" not in s:
    s=s.replace("    : testId.includes('full-mock')\n    ? 100", "    : testId.includes('iiser-iat/iat-full-mock')\n    ? 60\n    : testId.includes('full-mock')\n    ? 100")
if "  'iiser-iat': [\n    { section: 'Biology', count: 15 }," not in s:
    layout="""  'iiser-iat': [
    { section: 'Biology', count: 15 },
    { section: 'Chemistry', count: 15 },
    { section: 'Mathematics', count: 15 },
    { section: 'Physics', count: 15 },
  ],
"""
    s=s.replace("const fullMockLayouts: Record<string, { section: string; count: number }[]> = {\n", "const fullMockLayouts: Record<string, { section: string; count: number }[]> = {\n"+layout)
p.write_text(s)
