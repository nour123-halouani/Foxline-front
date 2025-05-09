"use client";
import logo from "../../../../../public/logos/main-logo.png";
import { useTranslations } from "@/app/hooks/useTranslations";
import { useState, useEffect, useRef } from "react";
import { Button } from "rizzui";
import Image from "next/image";
import Link from 'next/link'
import cn from "@/app/utils/class-names";
import LanguageToggle from "../../multiLanguage/LanguageToggle";
import { Close } from "../../icons/Close";
import { Menu } from "../../icons/Menu";
import { useLanguage } from "@/app/context/LanguageContext";
import IconArrowDropDownFill from "../../icons/ArrowDropUpDown";

export default function MainMenu() {
    const t = useTranslations();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openLanguageItems, setOpenLanguageItems] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 50 || currentScrollY < lastScrollY || mobileMenuOpen) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
            setLastScrollY(currentScrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const { lang, setLang } = useLanguage();

    return (
        <header className={cn("bg-typography text-white w-full z-50 fixed top-0 transition-all duration-300 ease-in-out transform text-base",
            showHeader ? "translate-y-0" : "-translate-y-full")}>
            <div className="container flex items-center justify-between py-[11px]">
                <Link href="/">
                    <Image src={logo} alt="Logo" width={130} height={220} />
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="hover:text-gold">{t("home")}</Link>
                    <Link href="/about-us" className="hover:text-gold">{t("aboutUs")}</Link>
                    <Link href="/faq" className="hover:text-gold">{t("FAQ")}</Link>
                    <Link href="/contact-us" className="hover:text-gold">{t("contactUs")}</Link>
                    <LanguageToggle />
                    <Link href="/sign-up">
                        <Button size="md" variant="outline" className="border-gold text-gold w-full">
                            {t("signUp")}
                        </Button>
                    </Link>
                    <Link href="/sign-in">
                        <Button size="md" className="bg-gold text-black w-full">
                            {t("signIn")}
                        </Button>
                    </Link>
                </nav>
                <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <Close className="text-gold" /> : <Menu className="text-gold" />}
                </button>
            </div>


            {mobileMenuOpen && (
                <div ref={mobileMenuRef} className="lg:hidden px-4 pb-4 flex flex-col gap-3">
                    <Link onClick={() => setMobileMenuOpen(false)} href="/" className="hover:text-gold">{t("home")}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} href="/about-us" className="hover:text-gold">{t("aboutUs")}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} href="/faq" className="hover:text-gold">{t("FAQ")}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} href="/contact-us" className="hover:text-gold">{t("contactUs")}</Link>
                    <div onClick={() => setOpenLanguageItems(!openLanguageItems)}>
                        <span className='flex flex-row items-center cursor-pointer hover:text-gold'>
                            {lang === 'en' ? 'English' : 'العربية'}
                            <IconArrowDropDownFill className={`transform ${openLanguageItems ? 'rotate-180' : ''} transition-transform`} />
                        </span>
                        {openLanguageItems && (
                            <div className="mx-2 flex flex-col gap-1 mt-2">
                                <div
                                    onClick={() => {
                                        setLang('en')
                                        setOpenLanguageItems(false)
                                    }}
                                    className="hover:text-gold font-light text-typography-lighter">
                                    English
                                </div>
                                <div
                                    onClick={() => {
                                        setLang('ar')
                                        setOpenLanguageItems(false)
                                    }}
                                    className="hover:text-gold font-light text-typography-lighter">
                                    العربية
                                </div>
                            </div>
                        )}
                    </div>

                    <Link onClick={() => setMobileMenuOpen(false)} href="/sign-up">
                        <Button size="md" variant="outline" className="border-gold text-gold w-full">
                            {t("signUp")}
                        </Button>
                    </Link>
                    <Link onClick={() => setMobileMenuOpen(false)} href="/sign-in">
                        <Button size="md" className="bg-gold text-black w-full">
                            {t("signIn")}
                        </Button>
                    </Link>
                </div>
            )}
        </header >
    );
}
