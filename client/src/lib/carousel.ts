export function getLoopingIndex(currentIndex: number, direction: 1 | -1, snapCount: number) {
  if (snapCount <= 0) return 0;
  return (currentIndex + direction + snapCount) % snapCount;
}

