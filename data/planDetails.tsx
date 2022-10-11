interface PlanProps {
  plan: string;
  price: string;
  clubs: string;
  info: string[];
  gradient?: string;
  color?: string;
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
  },
];
