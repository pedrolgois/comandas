"use client";
import { useContext, useState } from "react";

// Components
import { CommandCard } from "@/components/CommandCard";
import { CommandDetails } from "@/components/CommandDetails";

// Stores
import { CommandsContext } from "@/context/CommandProvider";
import { AddProductModal } from "@/components/AddProductModal";
import { ProductsContext } from "@/context/ProductProvider";

export default function ComandasPage() {
  const commandsStore = useContext(CommandsContext);
  const { productsState } = useContext(ProductsContext);

  const [selectedTable, setSelectedTable] = useState<number>(0);
  const [openAddProductModal, setOpenAddProductModal] =
    useState<boolean>(false);

  const ammount = 20;

  const selectedCommandData = commandsStore.commands?.find(
    (command) => command.selectedTable === selectedTable
  );

  return (
    <div className="flex gap-6 items-start">
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: ammount }, (_, index) => {
          const command = commandsStore.commands?.find(
            (command) => command.selectedTable === index + 1
          );
          return (
            <CommandCard
              key={index}
              title={`Mesa ${String(index + 1).padStart(2, "0")}`}
              status={command?.status ? "active" : "available"}
              client={command?.client}
              onClick={() => setSelectedTable(index + 1)}
            />
          );
        })}
      </div>
      <CommandDetails
        closeCommandDetailsAction={() => setSelectedTable(0)}
        selectedTable={selectedTable}
        command={selectedCommandData}
        addItemsToCommandAction={() => setOpenAddProductModal((prev) => !prev)}
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
