import { useTranslations } from "@/app/hooks/useTranslations";
import logo from "../../../../../public/logos/main-logo.png";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../../icons/Facebook";
import Instagram from "../../icons/Instagram";
import Whatsapp from "../../icons/Whatsapp";

export default function Footer() {
    const t = useTranslations();

    return (
        <footer className="bg-typography pt-12 text-typography-lighter flex flex-col gap-12">
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 gap-8">
                <div className="flex flex-col gap-4">
                    <Link className="hover:text-gold" href="/">
                        <Image src={logo} alt="Logo" width={130} height={220} />
                    </Link>
                    <p className="text-sm">{t("footerDescription")}</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-base text-white font-semibold uppercase">{t('explore')}</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link className="hover:text-gold" href="/about-us">{t("aboutUs")}</Link>
                        </li>
                        <li>
                            <Link className="hover:text-gold" href="/contact-us">{t("contactUs")}</Link>
                        </li>
                        <li>
                            <Link className="hover:text-gold" href="/warehouses">{t("warehouses")}</Link>
                        </li>
                        <li>
                            <Link className="hover:text-gold" href="/faq">{t("FAQ")}</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-base text-white font-semibold uppercase">{t('legal')}</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link className="hover:text-gold" href="#">{t("privacyPolicy")}</Link>
                        </li>
                        <li>
                            <Link className="hover:text-gold" href="#">{t('termsOfUse')}</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-base text-white font-semibold uppercase">{t('socialMedia')}</h2>
                    <div className="flex flex-row gap-4">
                        <Link target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/FoxLineExsspresCargo" className="bg-white text-gold p-2 rounded-full">
                            <Facebook />
                        </Link>
                        <Link href="#" className="bg-white text-gold p-2 rounded-full">
                            <Instagram />
                        </Link>
                        <Link href="#" className="bg-white text-gold p-2 rounded-full">
                            <Whatsapp />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container border-t border-typography-lighter py-6 text-center text-sm">
                Copyright ©FoxLine 2025
            </div>
        </footer>
    );
}
