"use client";
import React, { useState, useMemo } from "react";
import { HousePlug, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem, HoveredLink } from "../ui/navbar-menu";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "../ui/dropdown-menu";
import Image from "next/image";

interface SubLink {
    id: string;
    label: string;
}

interface NavLink {
    id: string;
    label: string;
    href: string;
    subLinks?: SubLink[];
}

export default function Navbar() {
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 👉 Single active dropdown control
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const links = useMemo<NavLink[]>(() => [
        {
            id: "courses",
            label: "Courses",
            href: "/my-courses",
            subLinks: [{ id: "myCourse", label: "My Course" }],
        },
        {
            id: "blog",
            label: "Blog",
            href: "/blog",
            subLinks: [
                { id: "latest-posts", label: "Latest Posts" },
                { id: "tutorials", label: "Tutorials" },
            ],
        },
        { id: "contacts", label: "Contacts", href: "/contacts" },
        { id: "faq", label: "FAQ", href: "/faq" },
    ], []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background shadow-md backdrop-blur-sm">

            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center h-14 max-w-7xl mx-auto px-6">
                <div>
                    <Link href="/">
                        <HousePlug className="text-white h-6 w-6" />
                    </Link>
                </div>

                <nav className="flex gap-6 text-lg font-medium">
                    {links.map((link) => (
                        <MenuItem
                            key={link.id}
                            item={link.label}
                            href={link.href}
                            activeItem={activeItem}
                            setActiveItem={setActiveItem}
                        >
                            {link.subLinks?.map((sub) => (
                                <HoveredLink key={sub.id} href={`#${sub.id}`}>
                                    {sub.label}
                                </HoveredLink>
                            ))}
                        </MenuItem>
                    ))}
                </nav>

                <div>
                    {!isLoggedIn ? (
                        <button
                            onClick={() => setIsLoggedIn(true)}
                            className="px-4 py-2 text-sm font-medium bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition"
                        >
                            Login
                        </button>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Image
                                src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                                alt="User"
                                width={32}
                                height={32}
                                className="rounded-full border border-yellow-400"
                            />
                            <span className="text-yellow-300 text-sm font-medium">Shakil</span>
                            <button className="text-xs hover:text-red-400" onClick={() => setIsLoggedIn(false)}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* ---------------- MOBILE NAVBAR ---------------- */}
            <div className="md:hidden flex justify-between items-center h-14 px-4">

                {/* Logo */}
                <Link href="/">
                    <HousePlug className="text-white h-6 w-6" />
                </Link>

                {/* Mobile Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 border rounded-md">
                        <Menu className="text-white h-5 w-5" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-48 mt-2 ">

                        {links.map((link) => (
                            <DropdownMenuItem key={link.id}>
                                <Link href={link.href}>{link.label}</Link>
                            </DropdownMenuItem>
                        ))}

                        <DropdownMenuItem className="mt-2 border-t pt-2">
                            {!isLoggedIn ? (
                                <button
                                    onClick={() => setIsLoggedIn(true)}
                                    className="w-full text-left"
                                >
                                    Login
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsLoggedIn(false)}
                                    className="w-full text-left text-red-500"
                                >
                                    Logout
                                </button>
                            )}
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </header>
    );

}
