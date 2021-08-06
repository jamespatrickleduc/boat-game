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
  },
  [F.LOBSTER]: {
    name: "Lobster",
    gold: 2,
    requirements: [E.LOBSTERPOT],
  },
  [F.SQUID]: {
    name: "Squid",
    gold: 1,
    requirements: [E.NET],
  },
  [F.TUNA]: {
    name: "Tuna",
    gold: 3,
  },
};

const L = TYPES.LOCATION;
export const LOCATION = {
  [L.RIVER]: {
    name: "River",
    fish: {
      [F.TROUT]: {
        max: 14,
        regen: 7,
      },
    },
  },
  [L.SHOAL]: {
    name: "Shoal",
    fish: {
      [F.TROUT]: {
        max: 10,
        regen: 5,
      },
      [F.LOBSTER]: {
        max: 10,
        regen: 5,
      },
    },
  },
  [L.DEEP]: {
    name: "Deep",
    requirements: [E.STRONGOARS],
    fish: {
      [F.SQUID]: {
        max: 10,
        regen: 5,
      },
      [F.TUNA]: {
        max: 10,
        regen: 5,
      },
    },
  },
};
