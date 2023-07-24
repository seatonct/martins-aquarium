import { getTravelTips } from "./database.js";

export const travelTipList = () => {
  // Invoke the function that you imported from the database module
  const travelTips = getTravelTips();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="travelTipList">';

  // Create HTML representations of each fish here
  for (const tip of travelTips) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="travelTipCard">
            <div class="tip-topic">${tip.topic}: </div>
            <div class="tip-content">${tip.tip}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
