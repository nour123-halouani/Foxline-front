"use client";
import Link from "next/link";
import StickyHeader from "./sticky-header";
import Sidebar from "./SiderBar";
import HamburgerButton from "../../icons/Hamburger";
import logo from "../../../../../public/logos/logo-foxline.png";
import Image from "next/image";

export default function Header() {
    return (
        <StickyHeader>
            <div className="xl:flex hidden w-full justify-between items-center">
                <Link href={"/"} aria-label="logo">
                    <Image src={logo} alt="Logo" width={20} height={20} />
                </Link>
                {/* <SearchWidget className="ml-[-30%]" /> */}
                {/* <HeaderMenuRight /> */} hd
            </div>
            <div className="xl:hidden flex w-full justify-between items-center">
                <HamburgerButton view={<Sidebar className="static !w-full" />} />
            </div>
        </StickyHeader>
    );
}