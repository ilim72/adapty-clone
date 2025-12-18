import Hero from '@/components/landing/Hero';
import SocialProof from '@/components/landing/SocialProof';
import FeatureTabs from '@/components/landing/FeatureTabs';
import MetricsBar from '@/components/landing/MetricsBar';
import MoreFeatures from '@/components/landing/MoreFeatures';
import Testimonials from '@/components/landing/Testimonials';
import IntegrationLogos from '@/components/landing/IntegrationLogos';
import Pricing from '@/components/landing/Pricing';
import CTASection from '@/components/landing/CTASection';

export const metadata = {
  title: 'Adapty | Лучшее решение для роста мобильных покупок в приложении',
  description: 'Единый сервис для работы с подписками на iOS, Android, React Native, Flutter, Unity и Web. Интеграция за 30 минут. A/B тестирование пейволлов, аналитика подписок.',
  openGraph: {
    title: 'Adapty | Мобильные подписки',
    description: 'Всё для роста дохода от подписок в вашем приложении',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <FeatureTabs />
      <MetricsBar />
      <MoreFeatures />
      <Testimonials />
      <IntegrationLogos />
      <Pricing />
      <CTASection />
    </main>
  );
}
