import CourseForm from "@/components/admin/CourseForm";

export default function CreateCoursePage() {
    return (
        <div className="p-6">
            <h2 className="text-2xl text-white font-bold mb-4">Create Course</h2>
            <CourseForm />
        </div>
    );
}
