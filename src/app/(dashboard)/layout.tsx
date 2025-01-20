import { SidebarNav } from "@/components/SidebarNav";
import { TabProvider } from "@/context/TabProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <TabProvider>
      <div className="flex">
        <SidebarNav />
        <main className="p-4 w-full">{children}</main>
      </div>
    </TabProvider>
  );
}
