import { getTankTips } from "./database.js";

export const tankTipList = () => {
  // Invoke the function that you imported from the database module
  const tankTips = getTankTips();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="tankTipList">';

  // Create HTML representations of each fish here
  for (const tip of tankTips) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="tankTipCard">
            <div class="tank-topic">${tip.topic}: </div>
            <div class="tank-content">${tip.tip}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
