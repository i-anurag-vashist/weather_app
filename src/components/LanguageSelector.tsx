
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="flex items-center gap-2">
      <GlobalOutlined className="text-muted-foreground" />
      <Select
        value={language}
        onChange={(value) => setLanguage(value as 'en' | 'hi' | 'pa')}
        style={{ width: 130 }}
        options={[
          { value: 'en', label: t.english },
          { value: 'hi', label: t.hindi },
          { value: 'pa', label: t.punjabi }
        ]}
      />
    </div>
  );
};

export default LanguageSelector;
