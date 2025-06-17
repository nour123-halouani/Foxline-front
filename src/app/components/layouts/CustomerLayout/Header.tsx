"use client";
import Link from "next/link";
import Sidebar from "./SiderBar";
import HamburgerButton from "../../icons/Hamburger";
import logo from "../../../../../public/logos/logo-foxline.png";
import Image from "next/image";
import StickyHeader from "./StickyHeader";
import CustomerHeaderActions from "./CustomerHeaderActions";

export default function Header() {
    return (
        <StickyHeader>
            <div className="xl:flex hidden w-full justify-between items-center">
                <Link href={"/"} aria-label="logo">
                    <Image src={logo} alt="Logo" width={150} className="xl:flex hidden" />
                </Link>
                <CustomerHeaderActions />
            </div>
            <div className="xl:hidden flex w-full justify-between items-center">
                <Link href={"/"} aria-label="logo">
                    <Image src={logo} alt="Logo" width={140} className="xl:hidden flex" />
                </Link>
                <div className="flex flex-row gap-2">
                    <CustomerHeaderActions />
                    <HamburgerButton className="text-gold" view={<Sidebar className="static !w-full" />} />
                </div>
            </div>
        </StickyHeader>
    );
}