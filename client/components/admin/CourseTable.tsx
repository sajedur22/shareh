// components/admin/CourseTable.tsx
"use client";

import { deleteCourse } from "@/lib/api/CoursesApi";
import Link from "next/link";

export default function CourseTable({ courses, reload }: any) {
    async function remove(id: string) {
        if (!confirm("Delete this course?")) return;
        await deleteCourse(id);
        reload();
    }

    return (
        <table className="w-full text-left border">
            <thead>
            <tr className="bg-gray-200 ">
                <th className="p-2">Image</th>
                <th className="p-2">Title</th>
                <th className="p-2">Price</th>
                <th className="p-2">Actions</th>
            </tr>
            </thead>

            <tbody>
            {courses.map((item: any) => (
                <tr key={item._id} className="border border-accent">
                    <td className="p-2">
                        <img src={item.image} className="w-16 h-16 rounded" />
                    </td>
                    <td className="p-2 text-white">{item.title}</td>
                    <td className="p-2 text-white">{item.discounted_price} {item.currency}</td>

                    <td className="p-2 flex gap-2">
                        <Link href={`/admin/courses/edit/${item._id}`} className="px-3 py-1 bg-blue-600 text-white rounded">
                            Edit
                        </Link>

                        <button onClick={() => remove(item._id)} className="px-3 py-1 bg-red-600 text-white rounded">
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
