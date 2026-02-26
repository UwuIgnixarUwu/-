import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://endurokz-portal.example'),
  title: 'ENDURO.KZ EXPERT — Каталог эндуро мотоциклов Казахстана',
  description:
    'Крупнейший портал-каталог эндуро мотоциклов 50–600cc для Казахстана: цены в тенге, аналитика, сравнения и экспертные статьи.',
  keywords: ['эндуро Казахстан', 'купить эндуро', 'эндуро 250', 'эндуро 300', 'каталог мотоциклов Казахстан'],
  openGraph: {
    title: 'ENDURO.KZ EXPERT',
    description: 'Каталог эндуро мотоциклов и экспертная аналитика для рынка Казахстана.',
    type: 'website',
    locale: 'ru_KZ'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="grid-glass min-h-screen">
        <Header />
        <main className="container-shell py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
