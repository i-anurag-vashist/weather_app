
import { toast } from "sonner";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // OpenWeatherMap API key
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
    country: string;
  };
  visibility: number;
  dt: number;
}

export interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
    dt_txt: string;
  }[];
  city: {
    name: string;
    country: string;
  };
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${
        import.meta.env.API_KEY
      }`
    );
    
    if (!response.ok) {
      throw new Error("Weather data not found");
    }
    
    return await response.json();
  } catch (error) {
    toast.error("Failed to fetch weather data");
    throw error;
  }
};

export const fetchForecastData = async (city: string): Promise<ForecastData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Forecast data not found");
    }
    return await response.json();
  } catch (error) {
    toast.error("Failed to fetch forecast data");
    throw error;
  }
};
