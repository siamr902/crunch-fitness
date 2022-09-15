const KELVIN_STANDARD = 273.15;

export const kelvinToCelcius = (temperature: number) => {
    return `${Math.round(temperature - KELVIN_STANDARD)}°`;
}