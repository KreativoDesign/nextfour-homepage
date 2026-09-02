export interface HomepageHeadlineLine {
  id: string;
  words: string[];
  startIndex: number;
  accent: boolean;
}

export const homepageHeadlineLines: HomepageHeadlineLine[] = [
  {
    id: "promise",
    words: ["One", "Partner.", "Every", "Solution."],
    startIndex: 0,
    accent: false,
  },
  {
    id: "result",
    words: ["Real", "Results."],
    startIndex: 4,
    accent: true,
  },
];

export const homepageHeadlineText = homepageHeadlineLines
  .map(line => line.words.join(" "))
  .join(" ");

export const HOMEPAGE_GRID_FADE_DISTANCE = 240;
export const HOMEPAGE_GRID_MIN_OPACITY = 0.38;

export function getHomepageGridOpacity(
  scrollY: number,
  heroBottom: number,
  fadeDistance = HOMEPAGE_GRID_FADE_DISTANCE
) {
  if (!Number.isFinite(scrollY) || !Number.isFinite(heroBottom)) {
    return 1;
  }

  const safeFadeDistance = Math.max(fadeDistance, 1);
  const progress = Math.min(
    Math.max((scrollY - heroBottom) / safeFadeDistance, 0),
    1
  );

  return 1 - progress * (1 - HOMEPAGE_GRID_MIN_OPACITY);
}
