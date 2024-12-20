"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Icons
import {
  ArrowDownIcon,
  ClockIcon,
  LogoutIcon,
  ProductsIcon,
  TableIcon,
} from "../../public/icons";

// Logo
import Logo from "../../public/imgs/Logo.png";

export const pagesList = [
  {
    icon: TableIcon,
    name: "Mesas",
    url: "/",
  },
  {
    icon: ProductsIcon,
    name: "Produtos",
    url: "/produtos",
  },
  {
    icon: ClockIcon,
    name: "Histórico",
    url: "/historico",
  },
];

export function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isOpen ? "min-w-[320px]" : "min-w-[96px]"
        }`}
      ></div>
      <nav
        className={`bg-system-red px-4 py-8 h-screen fixed flex flex-col transition-all duration-300 ${
          isOpen ? "w-[320px]" : "w-[96px]"
        }`}
      >
        <div className="group absolute w-40 h-40 grid place-items-center -right-20 top-[calc(50%-5rem)] ">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-10 h-10 bg-system-darkRed rounded-full grid place-items-center opacity-0 group-hover:opacity-100  transition-all duration-300 shadow-lg"
          >
            <ArrowDownIcon
              className={`[&>*]:fill-white stroke-white transition-all duration-300 ${
                isOpen ? "rotate-90" : "-rotate-90"
              }`}
            />
          </button>
        </div>
        <div className="bg-system-darkRed p-1 mb-6 rounded-[100px] flex justify-center min-h-[64px]">
          <Image
            src={Logo}
            alt="Logotipo bar do pedrinho"
            className={`w-[60px] transition-all duration-300 object-contain ${
              isOpen && "scale-[200%]"
            }`}
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <ul className="flex flex-col gap-2">
            {pagesList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="flex gap-4 p-3 items-center rounded-lg hover:bg-system-darkRed overflow-hidden"
                >
                  <item.icon
                    width={36}
                    height={36}
                    className="min-w-9 min-h-9"
                  />
                  <span className={`text-xl font-bold text-system-white`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Link
              href={"/login"}
              className="flex gap-4 p-3 items-center rounded-lg hover:bg-system-darkRed overflow-hidden"
            >
              <LogoutIcon width={36} height={36} className="min-w-9 min-h-9" />
              <span className="text-xl font-bold text-system-white">Sair</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
