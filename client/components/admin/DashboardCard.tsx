"use client";

import Link from "next/link";

export default function DashboardCard({ title, description, link }: any) {
    return (
        <Link
            href={link}
            className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white"
        >
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </Link>
    );
}
