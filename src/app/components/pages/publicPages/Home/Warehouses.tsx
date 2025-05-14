'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from 'rizzui';
import Title from '@/app/components/ui/Title';
import { useTranslations } from '@/app/hooks/useTranslations';
import warehousesDefault from "../../../../../../public/home-media/warehouses-default.png";
import warehouses from "../../../../../../public/home-media/warehouses-maps.png";
import warehousesDefaultMobile from "../../../../../../public/home-media/warehouses-default-mobile.png";
import warehousesMobile from "../../../../../../public/home-media/warehouses-maps-mobile.png";

export default function Warehouses() {
    const t = useTranslations();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.intersectionRatio >= 0.6);
            },
            {
                root: null,
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        );

        observer.observe(section);
        return () => observer.unobserve(section);
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={sectionRef} className="pt-12 bg-bg-dark">
            <Title title={t('warehouses')} className="justify-center pb-12" />
            <div className="sm:container">
                <Image
                    src={
                        isMobile
                            ? isVisible
                                ? warehousesMobile
                                : warehousesDefaultMobile
                            : isVisible
                                ? warehouses
                                : warehousesDefault
                    }
                    onClick={() => setIsVisible(true)}
                    alt="Warehouses Map"
                    className="object-cover transition-opacity duration-500"
                    priority
                />
            </div>
            <div className='flex flex-row gap-3 justify-center items-center pb-8 px-4'>
                <Link href="/">
                    <Button
                        size='md'
                        variant="outline"
                        className="border-gold text-gold w-full"
                    >
                        {t("seeMore")}
                    </Button>
                </Link>
                <Link href="/sign-in">
                    <Button
                        size='md'
                        className="bg-gold text-bg w-full"
                    >
                        {t("signIn")}
                    </Button>
                </Link>
            </div>
        </div>
    );
}