"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">Web Development</HoveredLink>
                        <HoveredLink href="/">Interface Design</HoveredLink>
                        <HoveredLink href="/">SEO</HoveredLink>
                        <HoveredLink href="/">Branding</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind CSS components."
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to RFPs, RFIs and RFQs faster using AI."
                        />
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Pricing">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">Hobby</HoveredLink>
                        <HoveredLink href="/">Individual</HoveredLink>
                        <HoveredLink href="/">Team</HoveredLink>
                        <HoveredLink href="/">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
