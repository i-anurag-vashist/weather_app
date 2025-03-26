import { Layout } from "antd";
import Header from "../components/Header";
import { getTranslation } from "../translations";
import { useLanguage } from "../contexts/LanguageContext";
import WeatherContainer from "../components/WeatherContainer";

const { Content, Footer } = Layout;

const Index = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  return (
    <Layout className="min-h-screen bg-gradient-to-b from-sky-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900">
      <Header />
      <Content className="container py-8">
        <WeatherContainer />
      </Content>
      <Footer className="text-center text-sm text-muted-foreground border-t bg-background/80 backdrop-blur-sm">
        &copy; {new Date().getFullYear()} {t.appTitle}
      </Footer>
    </Layout>
  );
};

export default Index;
