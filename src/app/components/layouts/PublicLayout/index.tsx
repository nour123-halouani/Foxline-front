"use client";
import { useSelector } from "react-redux";
import Footer from "./footer";
import MainMenu from "./menu";
import { RootState } from "@/_redux/store";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <MainMenu />
            <main className="flex-grow mt-28">{children}</main>
            <Footer />
        </div >
    );
}
