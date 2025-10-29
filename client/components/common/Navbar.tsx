"use client";

import React, {useState, useEffect, useMemo, JSX} from "react";
import { HousePlug, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HoveredLink, MenuItem } from "../ui/navbar-menu";

// 🔷 Type Definitions
interface SubLink {
    id: string;
    label: string;
}

interface NavLink {
    id: string;
    label: string;
    subLinks?: SubLink[];
}

// 🔶 Navbar Component
export default function Navbar(): JSX.Element {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<string>("home");
    const [active, setActive] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const SCROLL_OFFSET = 160; // Navbar height

    // ✅ Memoized Links Array (prevents useEffect dependency warning)
    const links = useMemo<NavLink[]>(
        () => [
            {
                id: "courses",
                label: "Courses",
                subLinks: [{ id: "web-development", label: "Web Development" }],
            },
            {
                id: "blog",
                label: "Blog",
                subLinks: [
                    { id: "latest-posts", label: "Latest Posts" },
                    { id: "tutorials", label: "Tutorials" },
                    { id: "case-studies", label: "Case Studies" },
                    { id: "news", label: "News" },
                ],
            },
            {
                id: "contacts",
                label: "Contacts",
                subLinks: [
                    { id: "support", label: "Support" },
                    { id: "careers", label: "Careers" },
                    { id: "feedback", label: "Feedback" },
                ],
            },
            {
                id: "events",
                label: "Events",
                subLinks: [
                    { id: "upcoming", label: "Upcoming" },
                    { id: "past", label: "Past" },
                ],
            },
            {
                id: "faq",
                label: "FAQ",
                subLinks: [
                    { id: "general", label: "General" },
                    { id: "billing", label: "Billing" },
                ],
            },
        ],
        []
    );

    // ✅ Smooth Scroll Function
    const handleScrollClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ): void => {
        if (pathname !== "/") return;
        e.preventDefault();

        const target = document.getElementById(targetId);
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - SCROLL_OFFSET,
            behavior: "smooth",
        });

        setActive(targetId);
    };

    // ✅ Scroll Event Listener
    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = (): void => {
            const scrollPosition = window.scrollY + SCROLL_OFFSET;
            let current = "home";

            for (const link of links) {
                const section = document.getElementById(link.id);
                if (section) {
                    if (
                        section.offsetTop <= scrollPosition &&
                        section.offsetTop + section.offsetHeight > scrollPosition
                    ) {
                        current = link.id;
                        break;
                    }
                }

                // Subsections check
                link.subLinks?.forEach((sub) => {
                    const subSection = document.getElementById(sub.id);
                    if (subSection) {
                        if (
                            subSection.offsetTop <= scrollPosition &&
                            subSection.offsetTop + subSection.offsetHeight > scrollPosition
                        ) {
                            current = link.id;
                        }
                    }
                });
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname, links]);

    // ✅ Utility for active link styles
    const getLinkClasses = (linkId: string): string =>
        `cursor-pointer transition-colors ${
            activeSection === linkId || active === linkId
                ? "text-yellow-300"
                : "text-muted-foreground"
        } hover:text-yellow-300`;

    // ✅ Auth handlers
    const handleLogin = (): void => setIsLoggedIn(true);
    const handleLogout = (): void => setIsLoggedIn(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background shadow-md backdrop-blur-sm transition-colors duration-300 dark:bg-background/80">
            {/* 💻 Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center h-14 max-w-7xl mx-auto px-6">
                {/* Logo */}
                <div className="text-primary-foreground cursor-pointer">
                    <Link href={"/"}>
                        <HousePlug className="h-6 w-6" />
                    </Link>
                </div>

                {/* Menu */}
                <nav className="flex justify-between text-lg font-medium gap-6">
                    {links.map((link) => (
                        <MenuItem
                            key={link.id}
                            setActive={setActive}
                            active={active}
                            item={link.label}
                        >
                            <div className="flex flex-col space-y-2 p-2">
                                {link.subLinks?.map((sub) => (
                                    <HoveredLink
                                        key={sub.id}
                                        href={`#${sub.id}`}
                                        onClick={(e:any) => handleScrollClick(e, sub.id)}
                                    >
                                        {sub.label}
                                    </HoveredLink>
                                ))}
                            </div>
                        </MenuItem>
                    ))}
                </nav>

                {/* Auth Section */}
                <div>
                    {!isLoggedIn ? (
                        <button
                            onClick={handleLogin}
                            className="px-4 py-2 text-sm font-medium bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition"
                        >
                            Login
                        </button>
                    ) : (
                        <div className="flex items-center gap-2">
                            <img
                                src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                                alt="User"
                                className="h-8 w-8 rounded-full border border-yellow-400"
                            />
                            <span className="text-yellow-300 text-sm font-medium">Shakil</span>
                            <button
                                onClick={handleLogout}
                                className="text-xs text-muted-foreground hover:text-red-400"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* 📱 Mobile Navbar */}
            <div className="flex md:hidden justify-between items-center h-12 max-w-7xl mx-auto px-6">
                <div className="text-primary-foreground cursor-pointer">
                    <Link href={"/"}>
                        <HousePlug className="h-5 w-5" />
                    </Link>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            aria-label="Open navigation menu"
                            className="p-2 rounded-md"
                            suppressHydrationWarning
                        >
                            <Menu className="h-6 w-6 text-white" />
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuSeparator />
                        {links.map((link) => (
                            <DropdownMenuItem key={link.id} asChild>
                                <div>
                                    <Link
                                        href={`#${link.id}`}
                                        onClick={(e) => handleScrollClick(e, link.id)}
                                        className={getLinkClasses(link.id)}
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            </DropdownMenuItem>
                        ))}

                        <DropdownMenuItem>
                            <div>
                                {!isLoggedIn ? (
                                    <button
                                        onClick={handleLogin}
                                        className="px-4 py-2 text-sm font-medium bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition"
                                    >
                                        Login
                                    </button>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                                            alt="User"
                                            className="h-8 w-8 rounded-full border border-yellow-400"
                                        />
                                        <span className="text-yellow-300 text-sm font-medium">
                      Shakil
                    </span>
                                        <button
                                            onClick={handleLogout}
                                            className="text-xs text-muted-foreground hover:text-red-400"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
