"use client";
import { useState } from "react";

// Components
import { Button } from "./Button";
import { TextInput } from "./Form/TextInput";

// Types
import { Command } from "@/models/command";
import { CalendarIcon, CloseIcon, TrashIcon } from "../../public/icons";

interface CommandDetailsProps {
  selectedTable: number;
  closeCommandDetails: () => void;
  command?: Command;
}

export function CommandDetails({
  command,
  selectedTable,
  closeCommandDetails,
}: CommandDetailsProps) {
  const [clientName, setClientName] = useState(command?.client || "");

  return (
    <>
      <div
        className={`bg-black fixed left-0 right-0 top-0 bottom-0 ${
          selectedTable == 0 ? "opacity-0 pointer-events-none" : "opacity-30"
        }`}
        onClick={closeCommandDetails}
      />
      <div
        className={`bg-system-grey1 p-4 h-screen w-[600px] min-w-[600px] flex flex-col fixed right-0 top-0 bottom-0 ${
          selectedTable == 0 ? "translate-x-full" : "translate-x-0"
        } transition-transform duration-300`}
      >
        <button
          onClick={closeCommandDetails}
          className="ml-auto block hover:bg-system-grey2 p-2 rounded"
        >
          <CloseIcon />
        </button>
        <span className="text-md font-bold -mb-2 text-black">Comanda</span>
        <span className="text-[40px] font-bold text-black">
          Mesa {String(selectedTable).padStart(2, "0")}
        </span>
        <div className="flex gap-4">
          <div className="flex justify-between gap-4 px-2 py-1 rounded bg-system-grey3 text-nowrap items-center min-w-[190px]">
            <span className="text-black text-xl font-normal">
              {command?.openedAt ?? "dd/mm/aaaa"}
            </span>
            <CalendarIcon />
          </div>
          <TextInput
            id="command-client-name-input"
            value={clientName}
            placeholder="Cliente"
            onChange={(newClientValue) =>
              setClientName(newClientValue.target.value)
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
              {command?.products.map((product) => (
                <tr key={product.id}>
                  <td className="px-2 py-1 border border-system-grey4 w-full">
                    Produto
                  </td>
                  <td className="px-2 py-1 border border-system-grey4 text-center">
                    2
                  </td>
                  <td className="px-2 py-1 border border-system-grey4 text-center">
                    R$15,99
                  </td>
                  <td className="px-2 py-2 border border-system-grey4">
                    <button className="flex items-center justify-center w-full hover:scale-90 transition-all duration-100">
                      <TrashIcon fill="transparent" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-2">
          <Button>Fechar comanda</Button>
        </div>
      </div>
    </>
  );
}
