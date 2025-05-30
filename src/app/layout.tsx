import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import { Metadata } from 'next';
import MainLayout from './components/layouts/MainLayout';
import GlobalDrawer from './utils/drawer/container';

export const metadata: Metadata = {
  title: "FoxLine Shipping Co.",
  description: "Shipping",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/logos/logo.png" />
      </head>
      <LanguageProvider>
        <GlobalDrawer />
        <MainLayout>{children}</MainLayout>
      </LanguageProvider>
    </html>
  );
}
