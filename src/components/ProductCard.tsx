"use client";

import { Product } from "@/models/command";
import Image from "next/image";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <div
      className="rounded-lg overflow-hidden border border-system-grey2 shadow-md cursor-pointer hover:scale-95 transition-all duration-200 max-w-[180px]"
      {...props}
    >
      <Image
        src={props.product.imageUrl}
        alt={props.product.name}
        width={180}
        height={200}
        className="object-contain h-[200px] w-[180px]"
      />
      <div className="flex flex-col gap-1 bg-system-grey2 p-2">
        <span className="text-base font-bold text-black">
          {props.product.name}
        </span>
        <span className="text-base font-normal text-black">
          R$ {props.product.price}
        </span>
      </div>
    </div>
  );
}
