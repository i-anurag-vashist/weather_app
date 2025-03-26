
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface WeatherSearchProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');
  const { language } = useLanguage();
  const t = getTranslation(language);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-2 max-w-md mx-auto mb-8">
      <Input 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder={t.search}
        className="flex-1"
      />
      <Button 
        type="primary" 
        htmlType="submit" 
        loading={isLoading}
        icon={<SearchOutlined />}
      >
        {t.searchButton}
      </Button>
    </form>
  );
};

export default WeatherSearch;
