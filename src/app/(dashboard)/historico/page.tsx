"use client";
import { useState } from "react";
import { CommandDetails } from "@/components/CommandDetails";
import { Command } from "@/models/command";
import { EyeIcon } from "../../../../public/icons";

const mockCommands: Command[] = [
  {
    id: "1",
    client: "Pedro",
    status: "paid",
    selectedTable: 1,
    products: [{ id: "1", ammount: 2, price: 15.99 }],
    openedAt: "2023-10-01 12:00",
    closedAt: "2023-10-01 14:00",
  },
  {
    id: "2",
    client: "Vinicius",
    status: "cancelled",
    selectedTable: 2,
    products: [],
    openedAt: "2023-10-01 13:00",
    closedAt: "2023-10-01 18:00",
  },
  {
    id: "3",
    client: "João",
    status: "paid",
    selectedTable: 1,
    products: [
      { id: "2", ammount: 2, price: 15.99 },
      { id: "3", ammount: 2, price: 15.99 },
    ],
    openedAt: "2023-10-01 14:00",
    closedAt: "2023-10-01 2:00",
  },
  {
    id: "4",
    client: "Maria",
    status: "pending",
    selectedTable: 7,
    products: [
      { id: "4", ammount: 2, price: 15.99 },
      { id: "5", ammount: 2, price: 15.99 },
      { id: "6", ammount: 2, price: 15.99 },
    ],
    openedAt: "2023-10-01 15:00",
    closedAt: "2023-10-01 21:00",
  },
];

export default function HistoricoPage() {
  const [selectedCommand, setSelectedCommand] = useState<Command | null>(null);

  const handleViewDetails = (command: Command) => {
    setSelectedCommand(command);
  };

  const calculateTotalAmount = (
    products: { id: string; ammount: number; price: number }[]
  ) => {
    const total = products.reduce(
      (total, product) => total + product.ammount * product.price,
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
          {mockCommands.map((command) => (
            <tr key={command.id}>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {command.id}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {command.selectedTable}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {command.openedAt}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {command.closedAt || "N/A"}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {command.client}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {command.status}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {calculateTotalAmount(command.products)}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => handleViewDetails(command)}
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
          selectedCommand ? "opacity-30" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSelectedCommand(null)}
      />
      <div
        className={`bg-system-grey1 p-4 h-screen w-[600px] min-w-[600px] flex flex-col fixed right-0 top-0 bottom-0 ${
          selectedCommand ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {selectedCommand && (
          <CommandDetails
            closeCommandDetails={() => setSelectedCommand(null)}
            selectedTable={selectedCommand.selectedTable}
            command={selectedCommand}
          />
        )}
      </div>
    </div>
  );
}
