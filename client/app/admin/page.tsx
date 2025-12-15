
import DashboardCard from "@/components/admin/DashboardCard";

export default function AdminDashboard() {
    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

            <DashboardCard
                title="Courses"
                link="/admin/courses"
                description="Create, edit and manage all courses"
            />

            <DashboardCard
                title="Batches"
                link="/admin/batches"
                description="Manage batch based on course"
            />

            <DashboardCard
                title="Videos"
                link="/admin/videos"
                description="Upload videos batch-wise"
            />

        </div>
    );
}
