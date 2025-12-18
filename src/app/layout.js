import { Space_Grotesk, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Adapty | Управление подписками для мобильных приложений',
  description: 'Платформа для создания и оптимизации подписок в мобильных приложениях',
  keywords: ['подписки', 'мобильные приложения', 'монетизация', 'аналитика'],
  authors: [{ name: 'Adapty' }],
  creator: 'Adapty',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Adapty',
    title: 'Adapty',
    description: 'Платформа для создания и оптимизации подписок в мобильных приложениях',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
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
