"use client";
import { Tab } from "@/models/tab";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface TabContextProps {
  tabs: Tab[];
  fetchTabs: () => Promise<void>;
}

export const TabsContext = createContext<TabContextProps | undefined>(
  undefined
);

export const TabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  const fetchTabs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tabs");
      const data = response.data.map((tab: any) => ({
        id: tab.id.toString(),
        customer: tab.customer,
        status: tab.status,
        tableNumber: tab.tableNumber,
        items: tab.items.map((item: any) => ({
          id: item.id.toString(),
          name: item.product.name,
          ammount: item.ammount,
          subtotal: item.subtotal,
        })),
        total: tab.total,
        openedAt: tab.openedAt,
        closedAt: tab.closedAt || null,
      }));
      setTabs(data);
    } catch (error) {
      console.error("Erro ao buscar comandas:", error);
    }
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  return (
    <TabsContext.Provider value={{ tabs: tabs, fetchTabs: fetchTabs }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs deve ser usado dentro de um TabProvider");
  }
  return context;
};
