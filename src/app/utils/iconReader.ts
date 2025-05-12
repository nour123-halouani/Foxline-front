"use client";
import { Boat } from "../components/icons/Boat";
import type { FC, SVGProps } from "react";
import React from "react";
import { Plane } from "../components/icons/Plane";
import { Handshake } from "../components/icons/Handshake";

const iconsMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
    Boat,
    Plane,
    Handshake
};

interface IconReaderProps {
    name: string;
    className?: string;
}

export function IconReader({ name, className = "" }: IconReaderProps): JSX.Element | null {
    const Icon = iconsMap[name];

    if (!Icon) {
        return null;
    }

    return React.createElement(Icon, { className });
}
