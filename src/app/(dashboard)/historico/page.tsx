"use client";
import { TabDetails } from "@/components/TabDetails";
import { useTabs } from "@/context/TabProvider";
import { Tab } from "@/models/tab";
import { useState } from "react";
import { EyeIcon } from "../../../../public/icons";

export default function HistoricoPage() {
  const { tabs: tabs } = useTabs();
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  const handleViewDetails = (tab: Tab) => {
    setSelectedTab(tab);
  };

  const calculateTotalAmount = (
    items: { id: string; ammount: number; subtotal: number }[]
  ) => {
    const total = items.reduce(
      (total, item) => total + item.ammount * item.subtotal,
      0
    );
    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  };

  return (
    <div className="flex flex-col gap-6 items-start">
      <h1 className="text-2xl font-bold">Histórico de Comandas</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-system-darkRed text-white">
            <th className="py-2 px-4 text-center">ID</th>
            <th className="py-2 px-4 text-center">Mesa</th>
            <th className="py-2 px-4 text-center">Abertura</th>
            <th className="py-2 px-4 text-center">Fechamento</th>
            <th className="py-2 px-4">Cliente</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4 text-center">Total</th>
            <th className="py-2 px-4 text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {tabs.map((tab) => (
            <tr key={tab.id}>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {tab.id}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {tab.tableNumber}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {tab.openedAt}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {tab.closedAt || "N/A"}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {tab.customer}
              </td>
              <td className="py-2 px-4 border border-gray-300">{tab.status}</td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {calculateTotalAmount(tab.items)}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => handleViewDetails(tab)}
                  className="flex items-center justify-center w-full hover:scale-90 transition-all duration-100"
                >
                  <EyeIcon fill="transparent" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className={`bg-black fixed left-0 right-0 top-0 bottom-0 ${
          selectedTab ? "opacity-30" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSelectedTab(null)}
      />
      <div
        className={`bg-system-grey1 p-4 h-screen w-[600px] min-w-[600px] flex flex-col fixed right-0 top-0 bottom-0 ${
          selectedTab ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {selectedTab && (
          <TabDetails
            closeTabDetailsAction={() => setSelectedTab(null)}
            tableNumber={selectedTab.tableNumber}
            tab={selectedTab}
          />
        )}
      </div>
    </div>
  );
}
