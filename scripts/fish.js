import { getFish } from "./database.js";

export const FishList = (fishArray) => {
  // const fishes = getFish();

  let htmlString = '<article class="fishList">';

  for (const fish of fishArray) {
    htmlString += `<section class="fishCard">
            <div><img class="fish-image" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">length: ${fish.size} inches</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = [];
  const fishes = getFish();
  for (const fish of fishes) {
    if (fish.size % 3 === 0) {
      holyFish.push(fish);
    }
  }

  return holyFish;
};

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const soldiers = [];
  const fishes = getFish();
  for (const fish of fishes) {
    if (fish.size % 5 === 0) {
      soldiers.push(fish);
    }
  }
  return soldiers;
};

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const regularFish = [];
  const fishes = getFish();
  for (const fish of fishes) {
    if (fish.size % 3 != 0 && fish.size % 5 != 0) {
      regularFish.push(fish);
    }
  }
  return regularFish;
};
