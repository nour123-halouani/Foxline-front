import cn from "@/app/utils/classNames";
import { ReactNode } from "react";

interface CardsProps {
    children: ReactNode;
    className?: string;
}

export default function CustomCard({ children, className }: CardsProps) {
    return (
        <div className={cn("bg-bg-lighter shadow-custom backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg text-center space-y-6", className)}>
            {children}
        </div>
    );
}
