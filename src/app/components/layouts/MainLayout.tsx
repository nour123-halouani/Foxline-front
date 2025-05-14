'use client';
import { ReactNode } from 'react';
import { Montserrat, Almarai } from 'next/font/google';
import { useLanguage } from '@/app/context/LanguageContext';
import cn from '@/app/utils/classNames';

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
    display: 'swap',
});

const almarai = Almarai({
    variable: '--font-almarai',
    subsets: ['arabic'],
    display: 'swap',
    weight: ['300', '400', '700', '800'],
});

export default function MainLayout({ children }: { children: ReactNode }) {
    const { lang } = useLanguage();

    const isArabic = lang === 'ar';
    const fontClass = isArabic ? 'font-arabic' : 'font-latin';

    return (
        <body className={cn(montserrat.variable, almarai.variable, fontClass)} dir={isArabic ? 'rtl' : 'ltr'}>
            {children}
        </body>
    );
}
