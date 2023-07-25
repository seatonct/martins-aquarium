import { getTravelTips } from "./database.js";

export const travelTipList = () => {
  const travelTips = getTravelTips();

  let htmlString = '<article class="travelTipList">';

  for (const tip of travelTips) {
    htmlString += `<section class="travelTipCard">
            <div class="tip-topic">${tip.topic}: </div>
            <div class="tip-content">${tip.tip}</div>
            <p></p>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
