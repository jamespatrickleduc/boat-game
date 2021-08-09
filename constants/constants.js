export const TYPES = {
  EQUIPMENT: {
    LOBSTERPOT: "LOBSTERPOT",
    NET: "NET",
    STRONGOARS: "STRONGOARS",
  },
  FISH: {
    TROUT: "TROUT",
    LOBSTER: "LOBSTER",
    SQUID: "SQUID",
    TUNA: "TUNA",
  },
  LOCATION: {
    RIVER: "RIVER",
    SHOAL: "SHOAL",
    DEEP: "DEEP",
  },
};

const E = TYPES.EQUIPMENT;
export const EQUIPMENT = {
  [E.LOBSTERPOT]: {
    name: "Lobster Pot",
    cost: 5,
  },
  [E.NET]: {
    name: "Net",
    cost: 5,
  },
  [E.STRONGOARS]: {
    name: "Strong Oars",
    cost: 7,
  },
};

const F = TYPES.FISH;
export const FISH = {
  [F.TROUT]: {
    name: "Trout",
    gold: 1,
    chance: 1,
    img: "/fish.png",
  },
  [F.LOBSTER]: {
    name: "Lobster",
    gold: 2,
    chance: 0.5,
    img: "/lobster.png",
    requirements: [E.LOBSTERPOT],
  },
  [F.SQUID]: {
    name: "Squid",
    gold: 1,
    chance: 1,
    img: "/squid.png",
    requirements: [E.NET],
  },
  [F.TUNA]: {
    name: "Tuna",
    gold: 3,
    img: "/fish.png",
    chance: 0.33,
  },
};

const L = TYPES.LOCATION;
export const LOCATION = {
  [L.RIVER]: {
    name: "River",
    fish: {
      [F.TROUT]: {
        max: 14,
        regen: 3,
      },
    },
  },
  [L.SHOAL]: {
    name: "Shoal",
    fish: {
      [F.TROUT]: {
        max: 10,
        regen: 2,
      },
      [F.LOBSTER]: {
        max: 10,
        regen: 3,
      },
    },
  },
  [L.DEEP]: {
    name: "Deep",
    requirements: [E.STRONGOARS],
    fish: {
      [F.SQUID]: {
        max: 10,
        regen: 3,
      },
      [F.TUNA]: {
        max: 10,
        regen: 3,
      },
    },
  },
};

export const TURN_LIMIT = 2;
