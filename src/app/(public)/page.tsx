"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTranslations } from '../hooks/useTranslations';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="p-4 flex-row">
      <div className='flex-row'>
        <span className="text-2xl font-bold mb-2">{t('homeTitle')}</span>
        <span className="mb-4">{t('homeDescription')}</span>
      </div>
      <DotLottieReact
        src="https://lottie.host/f830a3b3-80d4-495e-8c10-079fff5598dc/tttVpb7USX.lottie"
        loop
        autoplay
      />
    </main>
  );
}
