'use client';
import { useTranslations } from "@/app/hooks/useTranslations";
import HeroSection from "./HeroSection";
import ClosingTimes from "./ClosingTimes";

export default function Home() {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-20 container'>
            <HeroSection />
            <ClosingTimes />
        </div>
    );
}

