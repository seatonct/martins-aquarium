const database = {
  fish: [
    {
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQLj1v5bnis-b8z3J1cUeAqouXsMIH_CCRopadnS6aGKitYO9Ec_-5HmkxukBUfqeHfWEPapYY3Icap8gY",
      species: "species: Clown Fish",
      name: "name: Bart",
      food: "food: crustaceans",
      size: 5,
      location: "location: Great Barrier Reef",
    },
    {
      image:
        "https://a-z-animals.com/media/2022/07/iStock-149081471-2048x1587.jpg",
      species: "species: Puffer Fish",
      name: "name: Bloaty",
      food: "food: algae",
      size: 7,
      location: "location: Bali",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Pygocentrus_nattereri_-_Karlsruhe_Zoo_01.jpg",
      species: "species: Pirhana",
      name: "name: Snappy",
      food: "food: fish",
      size: 6,
      location: "location: Brazil",
    },
    {
      image:
        "https://cimi.org/wp-content/uploads/2022/03/giant_sea_bass_1600-1.jpg",
      species: "species: Sea Bass",
      name: "name: Bubba",
      food: "food: kelp",
      size: 43,
      location: "location: Jamaica",
    },
  ],
  travelTips: [
    {
      tip: "tip 1",
      topic: "lodging",
    },
    {
      tip: "tip 2",
      topic: "transportation",
    },
    {
      tip: "tip 3",
      topic: "supplies",
    },
    {
      tip: "tip 4",
      topic: "local customs",
    },
  ],
  locations: [
    {
      image:
        "https://media.cntraveller.com/photos/63eb5a36b515236831979f64/4:3/w_5352,h_4014,c_limit/GettyImages-1145042281.jpeg",
      location: "Bali",
    },
    {
      image:
        "https://res.cloudinary.com/enchanting/q_80,f_auto,c_lfill,w_400,h_300/ymt-web/2023/01/reef.jpg",
      location: "Great Barrier Reef, Australia",
    },
    {
      image:
        "https://www.planyourperfectvacation.com/wp-content/uploads/2017/07/Jamaica.jpg",
      location: "Jamaica",
    },
    {
      image:
        "https://media.cntraveller.com/photos/611becca628f4910ed10222d/16:9/w_2560%2Cc_limit/gettyimages-1044285108.jpg",
      location: "Amazon River, Brazil",
    },
  ],
  tankMaintenance: [
    {
      tip: "tip 1",
      topic: "cleaning",
    },
    {
      tip: "tip 2",
      topic: "salinity",
    },
    {
      tip: "tip 3",
      topic: "temperature",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};

export const getTravelTips = () => {
  return database.travelTips.map((travelTips) => ({ ...travelTips }));
};

export const getLocations = () => {
  return database.locations.map((locations) => ({ ...locations }));
};

export const getTankTips = () => {
  return database.tankMaintenance.map((tankMaintenance) => ({
    ...tankMaintenance,
  }));
};
