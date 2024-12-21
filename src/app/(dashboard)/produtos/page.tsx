"use client";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { ProductsContext } from "@/context/ProductProvider";
import { useContext } from "react";
import { AddIcon } from "../../../../public/icons";

export default function ProdutosPage() {
  const { productsState } = useContext(ProductsContext);

  const products = productsState.products;
  return (
    <div className="flex flex-col gap-6 w-full flex-1">
      <div className="flex justify-between">
        <div />
        <Button>
          <span>Adicionar produto</span>{" "}
          <AddIcon className="[&>*]:fill-white" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
