'use client';
import { useTranslations } from '@/app/hooks/useTranslations';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from 'rizzui';

export default function HeroSection() {
    const t = useTranslations();

    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-center pt-16 pb-16">
            <motion.div
                initial={{ x: -110, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-full md:w-1/2 space-y-6"
            >
                <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                    <span className="text-black">{t("heroSectionTitle1")} </span>
                    <span className="text-gold font-bold"> {t("heroSectionTitle2")}</span>
                </h1>
                <p className="text-typography text-sm">
                    {t("heroSectionDescription")}
                </p>
                <Link href="/contact" className="inline-block transition">
                    <Button size="md" className="bg-gold text-white py-4 px-6">
                        {t('contactUs')}
                    </Button>
                </Link>
            </motion.div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="md:w-[400px] md:h-[400px] lg:w-[520px] lg:h-[520px] h-[300px] w-[300px]">
                    <DotLottieReact
                        src="https://lottie.host/f830a3b3-80d4-495e-8c10-079fff5598dc/tttVpb7USX.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>
        </section>
    );
}