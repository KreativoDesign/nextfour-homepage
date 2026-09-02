export type LoopingItem<T> = {
  item: T;
  originalIndex: number;
  cycle: number;
};

/**
 * Returns the next carousel snap while keeping the result inside the available snap range.
 */
export function getLoopingIndex(
  currentIndex: number,
  direction: 1 | -1,
  count: number
): number {
  if (count <= 0) return 0;
  return (currentIndex + direction + count) % count;
}

/**
 * Repeats the source items so Embla always has enough content to keep looping,
 * including when a very wide viewport can show most or all source items at once.
 */
export function createLoopingItems<T>(
  items: T[],
  repeats = 3
): LoopingItem<T>[] {
  if (items.length === 0) return [];
  const cycleCount = Math.max(2, Math.ceil(repeats));

  return Array.from({ length: items.length * cycleCount }, (_, index) => ({
    item: items[index % items.length],
    originalIndex: index % items.length,
    cycle: Math.floor(index / items.length),
  }));
}
