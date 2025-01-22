"use client";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal"; // Supondo que você tenha o componente da modal
import * as types from "@/context/ProductContext/types"; // Importando os tipos de ações
import { ProductsContext } from "@/context/ProductProvider";
import axios from "axios";
import { useContext, useState } from "react";
import { AddIcon } from "../../../../public/icons";

export default function ProdutosPage() {
  const { productsState, productsDispatch } = useContext(ProductsContext);
  const products = productsState.products;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdToEdit, setProductIdToEdit] = useState<number | null>(null);

  const openModalForNewProduct = () => {
    setProductIdToEdit(null);
    setIsModalOpen(true);
  };

  const openModalForEditingProduct = (productId: number) => {
    setProductIdToEdit(productId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProductIdToEdit(null);
  };

  const updateProductsList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      productsDispatch({
        type: types.GET_PRODUCTS,
        payload: { products: response.data },
      });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full flex-1">
      <div className="flex justify-between">
        <div />
        <Button action={openModalForNewProduct}>
          <span>Adicionar produto</span>
          <AddIcon className="[&>*]:fill-white" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => openModalForEditingProduct(product.id)}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ProductModal
          productId={productIdToEdit}
          closeProductModalAction={closeModal}
          fetchProducts={updateProductsList}
        />
      )}
    </div>
  );
}
