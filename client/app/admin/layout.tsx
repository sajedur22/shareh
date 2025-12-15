// app/admin/courses/layout.tsx
import React, { ReactNode } from "react";
import Link from "next/link";

interface AdminCoursesLayoutProps {
    children: ReactNode;
}

export default function AdminCoursesLayout({ children }: AdminCoursesLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">

            {/* Navbar (Header) */}
            <nav className="w-full text-2xl text-white dark:bg-gray-800 shadow p-4">
                Admin Panel
            </nav>

            {/* Page Content */}
            <main className="flex-1 p-8">
                {children}
            </main>

        </div>

    );
}
