
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { ForecastData } from '../services/weatherService';
import { Card, Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

interface WeatherForecastProps {
  data: ForecastData;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ data }) => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  // Get one forecast per day
  const getForecastByDay = () => {
    const forecasts: any[] = [];
    const today = new Date().setHours(0, 0, 0, 0);
    
    data.list.forEach((item) => {
      const forecastDate = new Date(item.dt * 1000).setHours(0, 0, 0, 0);
      if (forecastDate > today && !forecasts.some(f => new Date(f.dt * 1000).setHours(0, 0, 0, 0) === forecastDate)) {
        forecasts.push(item);
      }
    });
    
    return forecasts.slice(0, 5); // Show 5 days forecast
  };

  const forecastByDay = getForecastByDay();

  const getDayName = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString(
      language === 'en' ? 'en-US' : language === 'hi' ? 'hi-IN' : 'pa-IN',
      { weekday: 'short' }
    );
  };

  return (
    <Card title={t.forecast}>
      <Row gutter={[16, 16]}>
        {forecastByDay.map((forecast, index) => (
          <Col key={index} xs={12} sm={8} md={4} lg={4}>
            <Card 
              bordered={false} 
              className="text-center bg-gradient-to-b from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700"
            >
              <Title level={5} className="mb-1">{getDayName(forecast.dt)}</Title>
              <img 
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
                alt={forecast.weather[0].description} 
                className="w-16 h-16 mx-auto"
              />
              <Title level={3} className="mb-0">{Math.round(forecast.main.temp)}°C</Title>
              <Text type="secondary" className="truncate block">{forecast.weather[0].description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default WeatherForecast;
