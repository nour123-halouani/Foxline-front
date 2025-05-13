'use client';
import Image from 'next/image';
import { Button, Input } from 'rizzui';
import loginMedia from '../../../../public/login-media/login.png';
import loginMediaArabic from '../../../../public/login-media/login-arabic.png';
import { useLanguage } from '@/app/context/LanguageContext';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function SignIn() {
  const { lang } = useLanguage();
  const t = useTranslations();

  return (
    <div className="py-24 md:py-32 px-4 md:px-8 flex justify-center">
      <div className="flex flex-col lg:flex-row bg-bg-lighter shadow-custom backdrop-blur-sm p-10 rounded-xl lg:rounded-[60px] max-w-4xl w-full gap-6">
        <div className="hidden lg:flex lg:w-1/2">
          <Image
            src={lang === 'ar' ? loginMediaArabic : loginMedia}
            alt="Login"
            className="object-contain"
          />
        </div>

        <section className="w-full lg:w-1/2 flex items-center justify-center">
          <form className="w-full  space-y-4">
            <h1 className="text-3xl font-bold">{t("signIn")}</h1>
            <p className="text-typography-lighter mb-6">
              Sign in to your account
            </p>
            <Input label="Name" placeholder="name" className="text-typography" />
            <Input label="Email" type="email" placeholder="email" className="text-typography" />
            <Button
              type="submit"
              className="w-full bg-gold text-white py-2 px-4 rounded"
            >
              {t("signIn")}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
