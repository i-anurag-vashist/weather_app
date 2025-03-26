
import React from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { Layout, Typography } from 'antd';
import { CloudOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <AntHeader className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20 py-4 border-b flex items-center" style={{ height: 'auto', background: 'rgba(255, 255, 255, 0.8)', padding: '0 16px' }}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CloudOutlined className="text-blue-500 text-2xl" />
          <Title level={4} className="m-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.appTitle}
          </Title>
        </div>
        <LanguageSelector />
      </div>
    </AntHeader>
  );
};

export default Header;
