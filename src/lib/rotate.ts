// Spreading a fixed-size "related items" list across the pages that render it.
//
// The problem this solves showed up in an inbound-link count on 22 September
// 2026. Several sections pick related items by ranking candidates and slicing
// the top N. Ranking is right; the slice is what hurts, because a stable
// ranking hands every page of a section the same N items. Everything below the
// cut collects no internal links at all, and a page whose only route in is one
// hub link is the profile that sits in Search Console's "Discovered, currently
// not indexed". 187 test pages and 38 topic-practice pages were in exactly
// that position, each with a single inbound link.
//
// Rotating the candidates by a hash of the page doing the linking fixes it
// without touching relevance: rotate inside a band of equally-ranked items and
// every page still shows its most relevant N, but different pages start at
// different places, so the whole set gets covered.
//
// Determinism matters more than distribution quality here. The site is a
// static export, so an unstable choice would reshuffle internal links on every
// build and make `qa:drift` useless.

/**
 * FNV-1a. Stable across builds and spreads short ids evenly, which is all this
 * needs; nothing depends on the value itself and it is not cryptographic.
 */
export function stableHash(value: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash;
}

/**
 * `items` rotated so it starts at a position derived from `seed`. Order is
 * otherwise preserved, so a caller that has already ranked its candidates
 * keeps that ranking within the rotation.
 */
export function rotateBy<T>(items: T[], seed: string): T[] {
  if (items.length < 2) return items;
  const start = stableHash(seed) % items.length;
  return [...items.slice(start), ...items.slice(0, start)];
}
