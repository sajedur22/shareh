"use client";

import React, { useState, useEffect } from "react";
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

export default function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("home");
    const [active, setActive] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    const handleLogin = () => {
        setIsLoggedIn(true);
        console.log("Login clicked");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log("Logout clicked");
    };

    const SCROLL_OFFSET = 160; // navbar height

    // ✅ Links with sublinks
    const links = [
        {
            id: "courses",
            label: "Courses",
            subLinks: [
                { id: "web-development", label: "Web Development" },
            ],
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
    ];

    // ✅ Scroll handler
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (pathname !== "/") return;
        e.preventDefault();

        const target = document.getElementById(targetId);
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - SCROLL_OFFSET,
            behavior: "smooth",
        });

        setActive(targetId); // set active for highlight
    };

    // ✅ Scroll listener for active section
    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = () => {
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
                // check sublinks
                link.subLinks?.forEach((sub) => {
                    const subSection = document.getElementById(sub.id);
                    if (subSection) {
                        if (
                            subSection.offsetTop <= scrollPosition &&
                            subSection.offsetTop + subSection.offsetHeight > scrollPosition
                        ) {
                            current = link.id; // parent link highlight
                        }
                    }
                });
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname, links]);

    // ✅ Classes
    const getLinkClasses = (linkId: string) =>
        `cursor-pointer transition-colors ${
            activeSection === linkId || active === linkId
                ? "text-yellow-300"
                : "text-muted-foreground"
        } hover:text-yellow-300`;

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background shadow-md backdrop-blur-sm transition-colors duration-300 dark:bg-background/80">

            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center h-14 max-w-7xl mx-auto px-6">
                <div className="text-primary-foreground cursor-pointer">
                    <Link href={"/"}>
                        <HousePlug className="h-6 w-6"/>
                    </Link>
                </div>

                <nav className="flex justify-between text-lg font-medium gap-6">
                    {links.map((link) => (
                        <MenuItem key={link.id} setActive={setActive} active={active} item={link.label}>
                            <div className="flex flex-col space-y-2 p-2">
                                {link.subLinks?.map((sub) => (
                                    <HoveredLink
                                        key={sub.id}
                                        href={`#${sub.id}`}
                                        onClick={(e) => handleScrollClick(e, sub.id)}
                                    >
                                        {sub.label}
                                    </HoveredLink>
                                ))}
                            </div>
                        </MenuItem>
                    ))}
                </nav>
                <div className=" ">
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

            {/* Mobile Navbar */}
            <div className="flex md:hidden justify-between items-center h-12 max-w-7xl mx-auto px-6">
                <div className="text-primary-foreground cursor-pointer">
                    <Link href={"/"}>
                        <HousePlug className="h-5 w-5"/>
                    </Link>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button aria-label="Open navigation menu" className="p-2 rounded-md" suppressHydrationWarning>
                            <Menu className="h-6 w-6 text-white"/>
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuSeparator/>
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
                            <div className=" ">
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
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}


/*"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HousePlug, Menu as MenuIcon, X } from "lucide-react";

interface NavbarProps {
    className?: string;
}

const SCROLL_OFFSET = 160;

export function Navbar({ className }: NavbarProps) {
    const [active, setActive] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);
    const toggleMobile = () => setMobileOpen(!mobileOpen);

    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + SCROLL_OFFSET;
            let current = "home";

            const sections = ["home", "courses", "blog", "services", "contact"];
            for (const id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    if (
                        section.offsetTop <= scrollPosition &&
                        section.offsetTop + section.offsetHeight > scrollPosition
                    ) {
                        current = section.id;
                        break;
                    }
                }
            }

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <Menu
            setActive={setActive}
            className={cn(
                "fixed top-0 left-0 w-full md:w-[80%] mx-auto bg-background rounded-2xl shadow-md z-[999]",
                className
            )}

        >
            <div className="flex items-center justify-between px-6 md:px-8 py-1 gap-8">

                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-8 text-lg font-semibold">
                        <HousePlug className="h-6 w-6 text-yellow-400" />
                        <span className="text-foreground">MyWebsite</span>
                    </Link>
                </div>


                <div className="hidden md:flex flex-1 justify-center">
                    <div className="flex gap-10 text-sm">
                        <MenuItem setActive={setActive} active={active} item="Courses">
                            <div className="flex flex-col space-y-2 p-2">
                                <HoveredLink href="/">Web Development</HoveredLink>
                            </div>
                        </MenuItem>

                        <MenuItem setActive={setActive} active={active} item="Blog">
                            <div className="flex flex-col space-y-2 p-2">
                                <HoveredLink href="/">Latest Posts</HoveredLink>
                                <HoveredLink href="/">Tutorials</HoveredLink>
                                <HoveredLink href="/">Case Studies</HoveredLink>
                                <HoveredLink href="/">News</HoveredLink>
                            </div>
                        </MenuItem>

                        <MenuItem setActive={setActive} active={active} item="Contacts">
                            <div className="flex flex-col space-y-2 p-2">
                                <HoveredLink href="/">Support</HoveredLink>
                                <HoveredLink href="/">Careers</HoveredLink>
                                <HoveredLink href="/">Feedback</HoveredLink>
                            </div>
                        </MenuItem>

                        <MenuItem setActive={setActive} active={active} item="Events">
                            <div className="flex flex-col space-y-2 p-2">
                                <HoveredLink href="/">Upcoming</HoveredLink>
                                <HoveredLink href="/">Past</HoveredLink>
                            </div>
                        </MenuItem>

                        <MenuItem setActive={setActive} active={active} item="FAQ">
                            <div className="flex flex-col space-y-2 p-2">
                                <HoveredLink href="/">General</HoveredLink>
                                <HoveredLink href="/">Billing</HoveredLink>
                            </div>
                        </MenuItem>
                    </div>
                </div>


                <div className="hidden md:flex items-center ml-60 gap-4">
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


                <button
                    className="md:hidden text-yellow-400 ml-3"
                    onClick={toggleMobile}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
            </div>


            {mobileOpen && (
                <div className="md:hidden px-6 pb-4 space-y-4 text-sm">
                    <HoveredLink href="/">Courses</HoveredLink>
                    <HoveredLink href="/">Blog</HoveredLink>
                    <HoveredLink href="/">Contacts</HoveredLink>
                    <HoveredLink href="/">Events</HoveredLink>
                    <HoveredLink href="/">FAQ</HoveredLink>

                    {!isLoggedIn ? (
                        <button
                            onClick={handleLogin}
                            className="w-full px-4 py-2 text-sm font-medium bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition"
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
            )}
        </Menu>
    );
}
*/