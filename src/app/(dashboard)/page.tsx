"use client";
import { useContext, useState } from "react";

// Components
import { CommandCard } from "@/components/CommandCard";
import { CommandDetails } from "@/components/CommandDetails";

// Stores
import { CommandsContext } from "@/context/CommandProvider";

export default function ComandasPage() {
  const commandsStore = useContext(CommandsContext);
  const [selectedTable, setSelectedTable] = useState<number>(0);
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
        selectedTable={selectedTable}
        command={selectedCommandData}
      />
    </div>
  );
}
