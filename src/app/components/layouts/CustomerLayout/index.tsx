import Header from "./Header";
import Sidebar from "./SiderBar";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="block min-h-screen">
      <Header />
      <Sidebar className="fixed hidden xl:block" />
      <div className="flex w-full flex-col xl:ms-[200px] xl:w-[calc(100%-200px)] 2xl:ms-64 2xl:w-[calc(100%-256px)] px-10 py-6 bg-bg-dark">
        {children}
      </div>
    </main>
  );
}