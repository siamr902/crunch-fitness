import Image from "next/image";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { kelvinToCelcius } from "../../utils/kelvinToCelcius";

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
      icon: string;
    };
  };
  name: string;
}

const WeatherDisplay = ({ weatherData }: WeatherProps) => {
  const {
    main: { temp, temp_max: high, temp_min: low },
    name,
    weather: {
      0: { main: status, icon},
    },
  }: WeatherData = weatherData;

  const weatherIcon = getWeatherIcon(icon)

  return (
    <div className="hidden relative lg:flex justify-center items-center flex-col w-52 h-48 bg-[#333] rounded-xl ml-1 mt-2 mb-2 text-white font-semibold space-y-2">
      <div className="absolute inset-2">
        <Image loader={() => weatherIcon} src={weatherIcon} width={40} height={40}/>
      </div>
      <div>{name}</div>
      <div className="text-5xl">{kelvinToCelcius(temp)}</div>
      <div>{status}</div>
      <div>{`H: ${kelvinToCelcius(high)} L: ${kelvinToCelcius(low)}`}</div>
    </div>
  );
};

export default WeatherDisplay;
