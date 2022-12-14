import { kelvinToCelcius } from "../../utils/kelvinToCelcius";
import { getWeatherImageText } from "../../utils/getWeatherImageText";

interface WeatherProps {
  weatherData: any;
}

interface WeatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    0: {
      main: string;
    };
  };
  name: string;
}

const WeatherDisplay = ({ weatherData }: WeatherProps) => {
  const {
    main: { temp, temp_max: high, temp_min: low },
    name = "Atlanta",
    weather: {
      0: { main: status },
    },
  }: WeatherData = weatherData;

  return (
    <div
      className="hidden lg:flex justify-center items-center flex-col font-croissant w-64 h-52 bg-cover rounded-xl ml-1 mt-2 mb-2 space-y-2 shadow-md shadow-black"
      style={{
        backgroundImage: `url('/${status.toLowerCase()}weather.jpg')`,
        color: `${getWeatherImageText(status)}`,
      }}
    >
      <div className="text-xl">{name}</div>
      <div className="text-5xl">{kelvinToCelcius(temp)}</div>
      <div className="text-lg">{status}</div>
      <div className="text-lg">{`H: ${kelvinToCelcius(
        high
      )} L: ${kelvinToCelcius(low)}`}</div>
    </div>
  );
};

export default WeatherDisplay;
