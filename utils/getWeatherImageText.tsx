export const getWeatherImageText = (status: string): string | undefined => {
  const WHITE = "white";
  const BLACK = "black";
  switch (status) {
    case "Clear":
      return WHITE;
    case "Rain":
      return BLACK;
    case "Cloudy":
      return BLACK;
    case "Drizzle":
      return WHITE;
    case "Thunderstorm":
      return BLACK;
    case "Snow":
      return BLACK;
    default:
      return BLACK;
  }
};
