"use client";
import React, {FC, JSX} from "react";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

interface SocialLink {
    icon: JSX.Element;
    href: string;
}

interface FooterLink {
    label: string;
    href?: string;
}

interface FooterSectionProps {
    title: string;
    links: FooterLink[];
}

const FooterSection: FC<FooterSectionProps> = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <ul className="space-y-2 text-sm">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} className="hover:text-white transition">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export const Footer: FC = () => {
    const socialLinks: SocialLink[] = [
        { icon: <Facebook className="w-5 h-5" />, href: "#" },
        { icon: <Instagram className="w-5 h-5" />, href: "#" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#" },
        { icon: <Github className="w-5 h-5" />, href: "#" },
    ];

    const companyLinks: FooterLink[] = [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Events", href: "#" },
    ];

    const legalLinks: FooterLink[] = [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Refund Policy", href: "#" },
    ];

    return (
        <footer className="bg-zinc-900 text-zinc-300 py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">SharX</h2>
                    <p className="text-sm leading-relaxed">
                        Empowering technology learners worldwide with professional online
                        live trainings. Transform your IT career with expert-led courses.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="hover:text-white transition"
                                aria-label="social-link"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Company */}
                <FooterSection title="Company" links={companyLinks} />

                {/* Legal */}
                <FooterSection title="Legal" links={legalLinks} />

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a
                                href="mailto:support@bongodev.com"
                                className="hover:text-white transition"
                            >
                                support@G.com
                            </a>
                        </li>
                        <li>01757258398 | 01978367094 | 01576641348</li>
                        <li>01911666994</li>
                        <li>PBTL Fatema 1/1/A, Ground Floor, Pallabi, Dhaka</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-zinc-500">
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
