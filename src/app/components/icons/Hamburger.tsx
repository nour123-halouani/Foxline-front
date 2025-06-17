"use client";
import { DrawerPlacements, useDrawer } from "@/app/hooks/use-drawer";
import cn from "@/app/utils/classNames";
import { ActionIcon } from "rizzui";

interface Props {
    view: JSX.Element;
    placement?: DrawerPlacements;
    className?: string;
}

export default function HamburgerButton({
    view,
    placement = "left",
    className,
}: Props) {
    const { openDrawer } = useDrawer();
    return (
        <ActionIcon
            aria-label="Open Sidebar Menu"
            variant="text"
            className={cn("h-auto w-auto p-0 xl:hidden", className)}
            onClick={() =>
                openDrawer({
                    view,
                    placement
                })
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="24px"
                height="24px"
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="48"
                    d="M88 152h336M88 256h336M88 360h336"
                />
            </svg>
        </ActionIcon>
    );
}