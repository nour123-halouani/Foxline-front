export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-600 text-white p-4">Customer Sidebar</aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}