"use client";
import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Text } from "rizzui";
import cn from "@/app/utils/classNames";
import { customerMenuItems } from "../../../constants/customerMenuItems";

export default function Sidebar({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <div className={cn("fixed z-50 h-full border-e-[1px] xl:w-56 bg-bg", className)}>
            <div className="px-2 py-4 flex flex-col justify-between h-[90%]">
                <div>
                    {customerMenuItems.map((item: any, index: number) => {
                        const isActive = pathname.startsWith(item?.href as string);
                        return (
                            <Fragment key={item.name + "-" + index}>
                                {item && (
                                    <Link
                                        href={item?.href}
                                        className={cn(
                                            "flex items-center rounded-lg px-3 py-2 gap-3",
                                            isActive && "bg-myBlue-lighter"
                                        )}
                                    >
                                        {item?.icon && (
                                            <span
                                                className={cn(
                                                    "[&>svg]:h-[20px] [&>svg]:w-[20px]",
                                                    isActive
                                                        ? "text-typography"
                                                        : "text-typography-lighter"
                                                )}
                                            >
                                                {item?.icon}
                                            </span>
                                        )}
                                        <Text
                                            as="p"
                                            className={cn(
                                                "text-sm capitalize tracking-[0.2px] font-medium",
                                                isActive ? "text-typography" : "text-typography-lighter"
                                            )}
                                        >
                                            {item.name}
                                        </Text>
                                    </Link>
                                )}
                            </Fragment>
                        );
                    })}
                    <div className="mt-4 flex justify-center">
                        <Link href="/manual-lookup">
                            Manual Lookup
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}