"use client";

import { createContext, useState } from "react";

// Types
import { Command } from "@/models/command";

type CommandsContextType = {
  commands: Command[] | null;
  setCommands: (commands: Command[]) => void;
};

const initialCommands: Command[] = [
  {
    id: "12121312",
    status: "active",
    client: "João",
    products: [
      { id: "1", ammount: 2 },
      { id: "2", ammount: 1 },
    ],
    openedAt: "2022-01-01",
    selectedTable: 1,
  },
  {
    id: "asda",
    status: "active",
    client: "Maria",
    openedAt: "2022-01-01",
    products: [
      { id: "1", ammount: 2 },
      { id: "2", ammount: 1 },
    ],
    selectedTable: 7,
  },
];

export const CommandsContext = createContext<CommandsContextType>({
  commands: initialCommands,
  setCommands: () => {},
});

export function CommandsProvider({ children }: { children: React.ReactNode }) {
  const [commands, setCommands] = useState<Command[] | null>(initialCommands);

  return (
    <CommandsContext.Provider value={{ commands, setCommands }}>
      {children}
    </CommandsContext.Provider>
  );
}
