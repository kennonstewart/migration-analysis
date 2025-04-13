import { Inputs, Plot } from "@observablehq/inputs";

export const chart = () => {
  return Plot.plot({
    marks: [
      Plot.barY(
        [
          { country: "Mexico", migrants: 120 },
          { country: "India", migrants: 90 },
          { country: "China", migrants: 75 }
        ],
        { x: "country", y: "migrants" }
      )
    ]
  });
};
