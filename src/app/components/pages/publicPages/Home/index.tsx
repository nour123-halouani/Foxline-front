'use client';

import { useTranslations } from "@/app/hooks/useTranslations";
import HeroSection from "./HeroSection";

export default function Home() {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-12 container'>
            <HeroSection />
        </div>
    );
}

