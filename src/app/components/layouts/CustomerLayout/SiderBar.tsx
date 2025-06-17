"use client";
import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Text } from "rizzui";
import cn from "@/app/utils/classNames";
import { useCustomerMenuItems } from "@/app/constants/customerMenuItems";

export default function Sidebar({ className }: { className?: string }) {
    const pathname = usePathname();
    const menuItems = useCustomerMenuItems();

    return (
        <div className={cn("fixed z-50 h-full border-e-[1px] bg-bg", className)}>
            <div className="px-2 py-6 flex flex-col justify-between">
                <div>
                    {menuItems?.map((item: any, index: number) => {
                        const isActive = pathname.startsWith(item?.href as string);
                        return (
                            <Fragment key={item.name + "-" + index}>
                                {item && (
                                    <Link
                                        href={item?.href}
                                        className={cn(
                                            "flex items-center rounded-lg px-3 py-2 gap-3",
                                            isActive && "bg-gold"
                                        )}
                                    >
                                        {item?.icon && (
                                            <span
                                                className={cn(
                                                    "[&>svg]:h-[20px] [&>svg]:w-[20px]",
                                                    isActive
                                                        ? "text-white"
                                                        : "text-typography"
                                                )}
                                            >
                                                {item?.icon}
                                            </span>
                                        )}
                                        <Text
                                            as="p"
                                            className={cn(
                                                "text-sm capitalize font-medium",
                                                isActive ? "text-white" : "text-typography"
                                            )}
                                        >
                                            {item.name}
                                        </Text>
                                    </Link>
                                )}
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}