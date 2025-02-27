"use client";
import { useContext, useState } from "react";

// Components
import { TabCard } from "@/components/TabCard";
import { TabDetails } from "@/components/TabDetails";

// Stores
import { AddProductModal } from "@/components/AddProductModal";
import { ProductsContext } from "@/context/ProductProvider";
import { TabsContext } from "@/context/TabProvider";
import axios from "axios";

export default function ComandasPage() {
  const tabsStore = useContext(TabsContext);
  const { productsState } = useContext(ProductsContext);

  const [selectedTable, setSelectedTable] = useState<number>(0);
  const [openAddProductModal, setOpenAddProductModal] =
    useState<boolean>(false);

  const ammount = 20;

  async function createTab(tableNumber: number) {
    try {
      await axios.post("http://localhost:8080/tabs", {
        tableNumber,
        customer: "",
        openedAt: new Date().toISOString(),
        status: "active",
      });
      await tabsStore.fetchTabs();
      setSelectedTable(tableNumber);
    } catch (error) {
      console.error("Erro ao criar nova comanda:", error);
    }
  }

  async function closeTab(tabId) {
    try {
      await axios.patch(`http://localhost:8080/tabs/${tabId}/close`);
      await tabsStore.fetchTabs();
      setSelectedTable(0);
    } catch (error) {
      console.error("Erro ao fechar a comanda:", error);
    }
  }

  return (
    <div className="flex gap-6 items-start">
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: ammount }, (_, index) => {
          const tab = tabsStore.tabs?.find(
            (tab) => tab.tableNumber === index + 1 && tab.status === "active"
          );
          return (
            <TabCard
              key={index}
              title={`Mesa ${String(index + 1).padStart(2, "0")}`}
              status={tab?.status === "active" ? "active" : "available"}
              customer={tab?.customer}
              onClick={() => {
                if (!tab || tab.status === "closed") {
                  createTab(index + 1);
                } else if (tab.status === "active") {
                  setSelectedTable(index + 1);
                }
              }}
            />
          );
        })}
      </div>
      <TabDetails
        closeTabDetailsAction={() => setSelectedTable(0)}
        tableNumber={selectedTable}
        tab={tabsStore.tabs?.find(
          (tab) => tab.tableNumber === selectedTable && tab.status === "active"
        )}
        addItemsToTabAction={() => setOpenAddProductModal((prev) => !prev)}
        fetchTabs={tabsStore.fetchTabs}
        closeTabAction={
          selectedTable > 0
            ? () =>
                closeTab(
                  Number(
                    tabsStore.tabs?.find(
                      (tab) =>
                        tab.tableNumber === selectedTable &&
                        tab.status === "active"
                    )?.id
                  )
                )
            : undefined
        }
      />
      {openAddProductModal && (
        <AddProductModal
          tabId={Number(
            tabsStore.tabs?.find(
              (tab) =>
                tab.tableNumber === selectedTable && tab.status === "active"
            )?.id
          )}
          products={productsState.products}
          closeAddProductModalAction={() =>
            setOpenAddProductModal((prev) => !prev)
          }
          fetchTabs={tabsStore.fetchTabs}
        />
      )}
    </div>
  );
}
