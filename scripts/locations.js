import { getLocations } from "./database.js";

export const locationsList = () => {
  // Invoke the function that you imported from the database module
  const harvestLocations = getLocations();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="harvestLocationsList">';

  // Create HTML representations of each fish here
  for (const location of harvestLocations) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="locationCard">
            <div><img class="location-image" src="${location.image}" /></div>
            <div class="location-name">${location.location}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
