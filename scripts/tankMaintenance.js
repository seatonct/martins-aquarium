import { getTankTips } from "./database.js";

export const tankTipList = () => {
  const tankTips = getTankTips();

  let htmlString = '<article class="tankTipList">';

  for (const tip of tankTips) {
    htmlString += `<section class="tankTipCard">
            <div class="tank-topic">${tip.topic}: </div>
            <div class="tank-content">${tip.tip}</div>
            <p></p>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
