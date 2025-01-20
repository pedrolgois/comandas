"use client";
import { useContext, useState } from "react";

// Components
import { TabCard } from "@/components/TabCard";
import { TabDetails } from "@/components/TabDetails";

// Stores
import { AddProductModal } from "@/components/AddProductModal";
import { ProductsContext } from "@/context/ProductProvider";
import { TabsContext } from "@/context/TabProvider";

export default function ComandasPage() {
  const tabsStore = useContext(TabsContext);
  const { productsState } = useContext(ProductsContext);

  const [selectedTable, setSelectedTable] = useState<number>(0);
  const [openAddProductModal, setOpenAddProductModal] =
    useState<boolean>(false);

  const ammount = 20;

  const selectedTabData = tabsStore.tabs?.find(
    (tab) => tab.tableNumber === selectedTable
  );

  return (
    <div className="flex gap-6 items-start">
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: ammount }, (_, index) => {
          const tab = tabsStore.tabs?.find(
            (tab) => tab.tableNumber === index + 1
          );
          return (
            <TabCard
              key={index}
              title={`Mesa ${String(index + 1).padStart(2, "0")}`}
              status={tab?.status ? "active" : "available"}
              customer={tab?.customer}
              onClick={() => setSelectedTable(index + 1)}
            />
          );
        })}
      </div>
      <TabDetails
        closeTabDetailsAction={() => setSelectedTable(0)}
        tableNumber={selectedTable}
        tab={selectedTabData}
        addItemsToTabAction={() => setOpenAddProductModal((prev) => !prev)}
      />
      {openAddProductModal && (
        <AddProductModal
          products={productsState.products}
          closeAddProductModalAction={() =>
            setOpenAddProductModal((prev) => !prev)
          }
        />
      )}
    </div>
  );
}
