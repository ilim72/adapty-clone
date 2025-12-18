import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Блог Adapty | Статьи о мобильных подписках',
  description: 'Экспертные статьи и гайды о создании и развитии приложений с подписками',
  keywords: ['подписки', 'мобильные приложения', 'монетизация', 'аналитика'],
  authors: [{ name: 'Adapty' }],
  creator: 'Adapty',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Adapty',
    title: 'Блог Adapty',
    description: 'Экспертные статьи и гайды о мобильных подписках',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} ${GeistSans.variable}`}>
      <body className="antialiased bg-white text-text-primary min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
