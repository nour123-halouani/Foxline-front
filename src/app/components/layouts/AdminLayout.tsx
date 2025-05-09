export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-gray-900 text-white p-4">Admin Sidebar</aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    );
  }
  