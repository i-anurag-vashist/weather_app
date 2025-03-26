
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { WeatherData } from '../services/weatherService';
import { Card, Row, Col, Typography, Statistic } from 'antd';
import { 
  CloudFilled, 
  ThunderboltFilled, 
  CompassFilled, 
  DashboardFilled, 
  EyeFilled,
  RiseOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface CurrentWeatherProps {
  data: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString(
      language === 'en' ? 'en-US' : language === 'hi' ? 'hi-IN' : 'pa-IN', 
      { hour: '2-digit', minute: '2-digit' }
    );
  };

  return (
    <Card>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 -m-4 mb-4 rounded-t-lg">
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={3} style={{ color: 'white', margin: 0 }}>
              {data.name}, {data.sys.country}
            </Title>
            <Text style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              {new Date(data.dt * 1000).toLocaleDateString(
                language === 'en' ? 'en-US' : language === 'hi' ? 'hi-IN' : 'pa-IN',
                { weekday: 'long', day: 'numeric', month: 'long' }
              )}
            </Text>
          </Col>
          <Col className="text-right">
            <Title level={1} style={{ color: 'white', margin: 0 }}>{Math.round(data.main.temp)}°C</Title>
            <Text style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{data.weather[0].description}</Text>
          </Col>
        </Row>
      </div>
      
      <Row gutter={[16, 16]}>
        <Col xs={12} md={6}>
          <Statistic 
            title={t.feelsLike}
            value={`${Math.round(data.main.feels_like)}°C`}
            prefix={<ThunderboltFilled className="text-blue-500" />}
          />
        </Col>
        
        <Col xs={12} md={6}>
          <Statistic 
            title={t.humidity}
            value={`${data.main.humidity}%`}
            prefix={<CloudFilled className="text-blue-500" />}
          />
        </Col>
        
        <Col xs={12} md={6}>
          <Statistic 
            title={t.wind}
            value={`${Math.round(data.wind.speed)} m/s`}
            prefix={<CompassFilled className="text-blue-500" />}
          />
        </Col>
        
        <Col xs={12} md={6}>
          <Statistic 
            title={t.pressure}
            value={`${data.main.pressure} hPa`}
            prefix={<DashboardFilled className="text-blue-500" />}
          />
        </Col>

        <Col xs={12} md={6}>
          <Statistic 
            title={t.visibility}
            value={`${data.visibility / 1000} km`}
            prefix={<EyeFilled className="text-blue-500" />}
          />
        </Col>
        
        <Col xs={12} md={6}>
          <Statistic 
            title={t.sunrise}
            value={formatTime(data.sys.sunrise)}
            prefix={<RiseOutlined className="text-orange-500" />}
          />
        </Col>
        
        <Col xs={12} md={6}>
          <Statistic 
            title={t.sunset}
            value={formatTime(data.sys.sunset)}
            prefix={<SettingOutlined className="text-red-500" />}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CurrentWeather;
