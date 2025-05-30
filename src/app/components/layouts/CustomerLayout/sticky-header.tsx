"use client";
import { useIsMounted } from "@/app/hooks/use-is-mounted";
import cn from "@/app/utils/classNames";
import useWindowScroll from "react-use/lib/useWindowScroll";

type StickyHeaderProps = {
    className?: string;
    offset?: number;
};

export default function StickyHeader({
    offset = 2,
    className,
    children,
}: React.PropsWithChildren<StickyHeaderProps>) {
    const isMounted = useIsMounted();
    const windowScroll = useWindowScroll();

    return (
        <header
            className={cn(
                "sticky top-0 bg-gray-0/80 p-3 backdrop-blur-xl border-b",
                ((isMounted && windowScroll.y) as number) > offset ? "card-shadow" : "",
                className
            )}
        >
            {children}
        </header>
    );
}