import AdminLayout from "@/app/components/layouts/AdminLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <AdminLayout>{children}</AdminLayout>;
}
