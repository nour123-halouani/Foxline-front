'use client';
import Image from 'next/image';
import loginMedia from '../../../../../../public/login-media/login.png';
import loginMediaArabic from '../../../../../../public/login-media/login-arabic.png';
import { useLanguage } from '@/app/context/LanguageContext';
import { useSelector } from 'react-redux';
import { RootState } from '@/_redux/store';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function AuthTemplate({ children }: any) {
    const { lang } = useLanguage();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const user = useSelector((state: RootState) => state.auth.user as any);
    const router = useRouter()
    useLayoutEffect(() => {
        if (isAuthenticated && user?.role) {
            switch (user.role) {
                case 'customer':
                    router.replace('/customer/profile');
                    break;
                case 'warehouse':
                    router.replace('/warehouse/profile');
                    break;
                default:
                    break;
            }
        }
    }, [isAuthenticated, user?.role]);

    return (
        <div className="px-4 md:px-8 flex justify-center pb-6 md:pb-8">
            <div className="flex flex-col lg:flex-row bg-bg-lighter shadow-custom backdrop-blur-sm p-10 rounded-xl lg:rounded-[60px] max-w-4xl w-full gap-6">
                <div className="hidden lg:flex lg:w-1/2">
                    <Image
                        src={lang === 'ar' ? loginMediaArabic : loginMedia}
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
