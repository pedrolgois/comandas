"use client";
import { useEffect, useState } from "react";

// Components
import { Button } from "./Button";
import { TextInput } from "./Form/TextInput";

// Types
import { Tab } from "@/models/tab";
import axios from "axios";
import {
  AddIcon,
  CalendarIcon,
  CloseIcon,
  TrashIcon,
} from "../../public/icons";

interface TabDetailsProps {
  tab?: Tab;
  tableNumber: number;
  closeTabDetailsAction: () => void;
  addItemsToTabAction?: () => void;
  closeTabAction?: () => void;
}

export function TabDetails({
  tab: tab,
  tableNumber: tableNumber,
  addItemsToTabAction: addItemsToTabAction,
  closeTabDetailsAction: closeTabDetailsAction,
  closeTabAction: closeTabAction,
  fetchTabs,
}: TabDetailsProps & { fetchTabs: () => Promise<void> }) {
  const [customerName, setCustomerName] = useState(tab?.customer || "");

  useEffect(() => {
    if (tab?.customer) {
      setCustomerName(tab.customer);
    } else {
      setCustomerName("");
    }
  }, [tab?.customer]);

  async function removeItemFromTab(itemId: number) {
    try {
      await axios.delete(`http://localhost:8080/tab-items/${itemId}`);
      await fetchTabs();
    } catch (error) {
      console.error("Erro ao remover item da comanda:", error);
    }
  }

  return (
    <>
      <div
        className={`bg-black fixed left-0 right-0 top-0 bottom-0 ${
          tableNumber == 0 ? "opacity-0 pointer-events-none" : "opacity-30"
        }`}
        onClick={closeTabDetailsAction}
      />
      <div
        className={`bg-system-grey1 p-4 h-screen w-[600px] min-w-[600px] flex flex-col fixed right-0 top-0 bottom-0 ${
          tableNumber == 0 ? "translate-x-full" : "translate-x-0"
        } transition-transform duration-300`}
      >
        <button
          onClick={closeTabDetailsAction}
          className="ml-auto block hover:bg-system-grey2 p-2 rounded"
        >
          <CloseIcon />
        </button>
        <span className="text-md font-bold -mb-2 text-black">Comanda</span>
        <span className="text-[40px] font-bold text-black">
          Mesa {String(tableNumber).padStart(2, "0")}
        </span>
        <div className="flex gap-4">
          <div className="flex justify-between gap-4 px-2 py-1 rounded bg-system-grey3 text-nowrap items-center min-w-[190px]">
            <span className="text-black text-xl font-normal">
              {tab?.openedAt
                ? new Date(tab.openedAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : "dd/mm/aaaa"}
            </span>
            <CalendarIcon />
          </div>
          <TextInput
            id="command-client-name-input"
            value={customerName}
            placeholder="Cliente"
            onChange={(newCustomerValue) =>
              setCustomerName(newCustomerValue.target.value)
            }
          />
        </div>
        <div className="flex-1 my-6">
          <table className="w-100">
            <thead className="bg-system-grey4 text-white text-xl uppercase">
              <tr>
                <th className="p-2 w-full">Produto</th>
                <th className="p-2 min-w-[90px]">Qtd.</th>
                <th className="p-2 min-w-[120px]">Preço</th>
                <th className="min-w-[50px]"></th>
              </tr>
            </thead>
            <tbody className="bg-system-grey1 text-xl text-black">
              {tab?.items.map((item) => (
                <tr key={item.id}>
                  <td className="px-2 py-1 border border-system-grey4 w-full">
                    {item.name}
                  </td>
                  <td className="px-2 py-1 border border-system-grey4 text-center">
                    {item.ammount}
                  </td>
                  <td className="px-2 py-1 border border-system-grey4 text-center">
                    R$ {item.subtotal.toFixed(2)}{" "}
                  </td>
                  <td className="px-2 py-2 border border-system-grey4">
                    <button
                      onClick={() => removeItemFromTab(Number(item.id))}
                      className="flex items-center justify-center w-full hover:scale-90 transition-all duration-100"
                    >
                      <TrashIcon fill="transparent" />
                    </button>
                  </td>
                </tr>
              ))}

              {addItemsToTabAction && (
                <tr>
                  <td className="border border-system-grey4" colSpan={4}>
                    <button
                      className="h-[36px] flex items-center justify-center w-full  bg-system-grey2 hover:bg-system-grey3 transition-all duration-200"
                      onClick={addItemsToTabAction}
                    >
                      <AddIcon />
                    </button>
                  </td>
                </tr>
              )}
              <tr className="bg-system-grey4 border border-system-grey4">
                <td colSpan={2} className="px-2 py-1 text-white">
                  Subtotal
                </td>
                <td
                  colSpan={2}
                  className="px-2 py-1 border-l border-system-white text-center font-semibold text-white"
                >
                  R$ {tab?.total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {closeTabAction && (
          <div className="flex justify-center mt-2">
            <Button action={closeTabAction}>Fechar comanda</Button>
          </div>
        )}
      </div>
    </>
  );
}
