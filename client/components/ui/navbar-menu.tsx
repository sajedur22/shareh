"use client";

import React, { ReactNode, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface MenuItemProps {
    item: string;
    href: string;
    children?: ReactNode;
    activeItem: string | null;
    setActiveItem: (v: string | null) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
                                                      item,
                                                      href,
                                                      children,
                                                      activeItem,
                                                      setActiveItem,
                                                  }) => {
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleEnter = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setActiveItem(item);
    };

    const handleLeave = () => {
        hoverTimeout.current = setTimeout(() => setActiveItem(null), 800);
    };

    const hovered = activeItem === item;

    return (
        <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <button
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    hovered ? "text-yellow-300" : "text-black dark:text-white"
                }`}
            >
                <Link href={href}>{item}</Link>
            </button>

            {hovered && children && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50"
                >
                    <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-black/20 p-2 flex flex-col gap-1">
                        {children}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export const HoveredLink = ({
                                href,
                                children,
                            }: {
    href: string;
    children: ReactNode;
}) => (
    <Link
        href={href}
        className="w-full text-left text-white px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition"
    >
        {children}
    </Link>
);
