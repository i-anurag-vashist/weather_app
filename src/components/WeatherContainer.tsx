
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { 
  fetchWeatherData, 
  fetchForecastData, 
  WeatherData, 
  ForecastData 
} from '../services/weatherService';
import WeatherSearch from './WeatherSearch';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import { Skeleton, Alert } from 'antd';
import { toast } from "sonner";

const WeatherContainer: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { language } = useLanguage();
  const t = getTranslation(language);

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    try {
      const [weather, forecast] = await Promise.all([
        fetchWeatherData(city),
        fetchForecastData(city)
      ]);
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      toast.error(t.error);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const renderWeatherContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-4">
          <Skeleton active paragraph={{ rows: 6 }} />
          <Skeleton active paragraph={{ rows: 6 }} />
        </div>
      );
    }

    if (!weatherData || !forecastData) {
      return (
        <Alert
          message={t.noData}
          type="info"
          showIcon
          className="text-center p-6"
        />
      );
    }

    return (
      <div className="space-y-6">
        <CurrentWeather data={weatherData} />
        <WeatherForecast data={forecastData} />
      </div>
    );
  };

  return (
    <div className="py-8">
      <WeatherSearch onSearch={handleSearch} isLoading={isLoading} />
      {renderWeatherContent()}
    </div>
  );
};

export default WeatherContainer;
