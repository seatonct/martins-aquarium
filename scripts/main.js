import { getFish } from "./database.js";
import { FishList, mostHolyFish, soldierFish, nonHolyFish } from "./fish.js";
import { travelTipList } from "./tips.js";
import { locationsList } from "./locations.js";
import { tankTipList } from "./tankMaintenance.js";

const allFish = getFish();

for (const fish of allFish) {
  console.log(fish);
}

const fishCollection = document.querySelector("#martinsFish");

fishCollection.innerHTML =
  FishList(mostHolyFish()) + FishList(soldierFish()) + FishList(nonHolyFish());

const martinsTravelTips = document.querySelector("#travelTipEl");

martinsTravelTips.innerHTML = travelTipList();

const martinsHarvestSites = document.querySelector("#locations");

martinsHarvestSites.innerHTML = locationsList();

const martinsTankTips = document.querySelector("#tankMaintenance");

martinsTankTips.innerHTML = tankTipList();
