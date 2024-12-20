import { SidebarNav } from "@/components/SidebarNav";
import { CommandsProvider } from "@/context/CommandProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <CommandsProvider>
      <div className="flex">
        <SidebarNav />
        <main className="p-4">{children}</main>
      </div>
    </CommandsProvider>
  );
}
