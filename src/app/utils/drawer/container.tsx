"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Drawer } from "rizzui";
import { useDrawer } from "@/app/hooks/use-drawer";

export default function GlobalDrawer() {
  const { isOpen, view, placement, closeDrawer } = useDrawer();
  const pathname = usePathname();

  useEffect(() => {
    closeDrawer();
  }, [pathname]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeDrawer}
      placement={placement}
      className="z-[9999]"
      containerClassName="max-w-[16rem]"
    >
      {view}
    </Drawer>
  );
}
