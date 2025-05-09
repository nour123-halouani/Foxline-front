export default function SubAdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen bg-white">
        <aside className="w-64 bg-green-700 text-white p-4">Warehouse Sidebar</aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    );
  }
  