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
  .map((line) => line.words.join(" "))
  .join(" ");
