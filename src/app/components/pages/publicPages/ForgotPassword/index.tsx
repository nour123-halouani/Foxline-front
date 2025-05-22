'use client';
import Image from 'next/image';
import ForgotMedia from '../../../../../../public/login-media/forgot.png';
import ForgotMediaArabic from '../../../../../../public/login-media/forgot-arabic.png';
import { useLanguage } from '@/app/context/LanguageContext';

export default function ForgotPasswordTemplate({ children }: any) {
    const { lang } = useLanguage();

    return (
        <div className="py-24 md:py-32 px-4 md:px-8 flex justify-center">
            <div className="flex flex-col lg:flex-row bg-bg-lighter shadow-custom backdrop-blur-sm p-10 rounded-xl lg:rounded-[60px] max-w-4xl w-full gap-6">
                <div className="hidden lg:flex lg:w-1/2">
                    <Image
                        src={lang === 'ar' ? ForgotMediaArabic : ForgotMedia}
                        alt="Login"
                        className="object-contain"
                    />
                </div>
                <section className="w-full lg:w-1/2 flex items-center justify-center">
                    {children}
                </section>
            </div>
        </div>
    );
}
