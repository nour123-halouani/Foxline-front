'use client';
import { ReactNode, useEffect } from 'react';
import { Montserrat, Almarai } from 'next/font/google';
import { useLanguage } from '@/app/context/LanguageContext';
import cn from '@/app/utils/classNames';
import Providers from '@/_redux/provider';
import { Toaster } from 'react-hot-toast';
import { AppDispatch } from '@/_redux/store';
import { useDispatch } from 'react-redux';
import { setUserFromToken } from '@/_redux/reducers/authSlice';

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

function InitUser() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const user = JSON.parse(localStorage.getItem('user') || 'null');
        if (token && user) {
            dispatch(setUserFromToken(user));
        }
    }, [dispatch]);

    return null;
}

export default function MainLayout({ children }: { children: ReactNode }) {
    const { lang } = useLanguage();
    const isArabic = lang === 'ar';
    const fontClass = isArabic ? 'font-arabic' : 'font-latin';

    return (
        <body suppressHydrationWarning={true} className={cn(montserrat.variable, almarai.variable, fontClass)} dir={isArabic ? 'rtl' : 'ltr'}>
            <Providers>
                <InitUser />
                <Toaster />
                {children}
            </Providers>
        </body>
    );
}
