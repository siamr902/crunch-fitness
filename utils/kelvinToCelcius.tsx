const KELVIN_STANDARD = 273.15;

export const kelvinToCelcius = (temperature: number = KELVIN_STANDARD): string => {
    return `${Math.round(temperature - KELVIN_STANDARD)}°`;
}