"use client"
import { useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./SiderBar";
import { RootState } from "@/_redux/store";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user as any);
  const router = useRouter()
  useLayoutEffect(() => {
    if (!isAuthenticated || user?.role !== "customer") {
      router.replace('/sign-in');
    }
  }, [isAuthenticated, user?.role]);

  return (
    <main className="block min-h-screen">
      <Header />
      <Sidebar className="fixed hidden xl:block xl:w-[220px] 2xl:w-[256px]" />
      <div className="flex w-full flex-col xl:ms-[220px] xl:w-[calc(100%-220px)] 2xl:ms-64 2xl:w-[calc(100%-256px)] px-10 py-4 bg-bg-dark">
        {children}
      </div>
    </main>
  );
}