const KELVIN_STANDARD = 273.15;

export const kelvinToFahrenheit = (temperature: number = KELVIN_STANDARD): string => {
    const celcius = temperature - KELVIN_STANDARD;
    const fahrenheit = celcius * 9 / 5 + 32;
    return `${Math.round(fahrenheit)}°`;
}