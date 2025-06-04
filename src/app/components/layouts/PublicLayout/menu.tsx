"use client";
import logo from "../../../../../public/logos/logo-foxline.png";
import { useTranslations } from "@/app/hooks/useTranslations";
import { useState, useEffect, useRef } from "react";
import { Avatar, Button } from "rizzui";
import Image from "next/image";
import Link from 'next/link'
import cn from "@/app/utils/classNames";
import LanguageToggle from "../../multiLanguage/LanguageToggle";
import { Close } from "../../icons/Close";
import { Menu } from "../../icons/Menu";
import { useLanguage } from "@/app/context/LanguageContext";
import IconArrowDropDownFill from "../../icons/ArrowDropUpDown";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/_redux/store";
import { Dropdown } from 'rizzui';
import { User } from "../../icons/User";
import { Logout } from "../../icons/Logout";
import { useRouter } from "next/navigation";
import { logout } from "@/_redux/actions/auth";

export default function MainMenu() {
    const t = useTranslations();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openLanguageItems, setOpenLanguageItems] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);
    const { lang, setLang } = useLanguage();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const user = useSelector((state: RootState) => state.auth.user as any)
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

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


    const goToProfile = () => {
        if (user?.role) {
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
    }

    const handleLogout = async () => {
        if (user?.id) {
            await dispatch(logout({ t }));
        }
    };

    return (
        <header className={cn("bg-typography text-white w-full z-50 fixed top-0 transition-all duration-300 ease-in-out transform text-base",
            showHeader ? "translate-y-0" : "-translate-y-full")}>
            <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-8 flex items-center justify-between py-[11px]">
                <Link href="/">
                    <Image src={logo} alt="Logo" width={130} height={220} />
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="hover:text-gold">{t("home")}</Link>
                    <Link href="/about-us" className="hover:text-gold">{t("aboutUs")}</Link>
                    <Link href="/faq" className="hover:text-gold">{t("FAQ")}</Link>
                    <Link href="/contact-us" className="hover:text-gold">{t("contactUs")}</Link>
                    <LanguageToggle />
                    {!isAuthenticated ?
                        <>
                            <Link onClick={() => setMobileMenuOpen(false)} href="/sign-up">
                                <Button size="md" variant="outline" className="border-gold text-gold w-full">
                                    {t("signUp")}
                                </Button>
                            </Link>
                            <Link onClick={() => setMobileMenuOpen(false)} href="/sign-in">
                                <Button size="md" className="bg-gold text-typography w-full">
                                    {t("signIn")}
                                </Button>
                            </Link>
                        </>
                        :
                        <Dropdown placement='bottom-start' className="z-99999">
                            <Dropdown.Trigger className='cursor-pointer'>
                                <span className='flex flex-row items-center'>
                                    <div className="flex items-center justify-center gap-4">
                                        <Avatar
                                            name={user?.name}
                                            size="sm"
                                            color="primary"
                                            className="text-typography"
                                        />
                                        <span className="text-base">{user?.name}</span>
                                    </div>
                                    <IconArrowDropDownFill />
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Menu className="divide-y bg-white">
                                <Dropdown.Item
                                    onClick={goToProfile}
                                    className='flex flex-row items-center gap-2 hover:bg-gold-lighter'>
                                    <User className="h-5 w-5 text-gold" /> <span> {t('mySpace')}</span>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}
                                    className='flex flex-row items-center gap-2 hover:bg-gold-lighter'>
                                    <Logout className="h-5 w-5 text-gold" lang={lang} /> <span>{t('logout')}</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </nav>
                <button className="lg:hidden flex flex-row gap-2 items-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {isAuthenticated &&
                        <div className="flex items-center gap-4" onClick={goToProfile}>
                            <Avatar
                                name={user?.name}
                                size="sm"
                                color="primary"
                                className="text-typography"
                            />
                        </div>
                    }
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
                    {!isAuthenticated ?
                        <>
                            <Link onClick={() => setMobileMenuOpen(false)} href="/sign-up">
                                <Button size="md" variant="outline" className="border-gold text-gold w-full">
                                    {t("signUp")}
                                </Button>
                            </Link>
                            <Link onClick={() => setMobileMenuOpen(false)} href="/sign-in">
                                <Button size="md" className="bg-gold text-typography w-full">
                                    {t("signIn")}
                                </Button>
                            </Link>
                        </>
                        :
                        <div onClick={() => {
                            setMobileMenuOpen(false)
                            handleLogout()
                        }}
                            className='flex flex-row items-center hover:text-gold gap-2 cursor-pointer'>
                            <Logout className="h-5 w-5 text-gold" lang={lang} /> <span>{t('logout')}</span>
                        </div>
                    }
                </div>
            )}
        </header >
    );
}
