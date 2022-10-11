interface PlanProps {
  plan: string;
  price: string;
  clubs: string;
  info: string[];
  gradient?: string;
  color?: string;
  apiId: string;
  quantity?: number;
}

export const planDetails: PlanProps[] = [
  {
    plan: "Peak Results",
    price: "29.99",
    clubs: "Access to 377 clubs **",
    gradient: "#f89a37, #f20d36",
    color: "#f99919",
    info: [
      "Cardio, Weights, & Machines",
      "Locker Rooms with Showers",
      "CrunchONE Kickoff",
      "Online Nutrition",
      "Power Half Hour Circuit Training",
      "Free T-shirt",
      "Group Fitness Classes",
      "Crunch Live Online Workouts",
      "Guest Privileges",
      "HydroMassage",
      "Tanning",
      "Advanced HIIT Classes",
    ],
    apiId: "price_1LrRkyERF9M9xATNe4CZ4bTM",
    quantity: 1
  },
  {
    plan: "Peak",
    price: "22.99",
    clubs: "Access to 377 clubs **",
    gradient: "#f20d36, #8f2496",
    color: "#de1245",
    info: [
      "Cardio, Weights, & Machines",
      "Locker Rooms with Showers",
      "CrunchONE Kickoff",
      "Online Nutrition",
      "Power Half Hour Circuit Training",
      "Free T-shirt",
      "Group Fitness Classes",
      "Crunch Live Online Workouts",
    ],
    apiId: "price_1LrRlTERF9M9xATNenUs4xnD",
    quantity: 1
  },
  {
    plan: "Base",
    price: "9.99",
    clubs: "Access to this club",
    gradient: "#8f2496, #4adffd",
    color: "#28a9ec",
    info: [
      "Cardio, Weights, & Machines",
      "Locker Rooms with Showers",
      "CrunchONE Kickoff",
      "Online Nutrition",
      "Power Half Hour Circuit Training",
      "Free T-shirt",
    ],
    apiId: "price_1LrRlpERF9M9xATN6Qpm3jRB",
    quantity: 1
  },
];
