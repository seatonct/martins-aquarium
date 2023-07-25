import { getLocations } from "./database.js";

export const locationsList = () => {
  const harvestLocations = getLocations();

  let htmlString = '<article class="harvestLocationsList">';

  for (const location of harvestLocations) {
    htmlString += `<section class="locationCard">
            <div><img class="location-image" src="${location.image}" /></div>
            <div class="location-name">${location.location}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
