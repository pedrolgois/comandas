import { useState } from "react";

// components
import { Product } from "@/models/tab";
import axios from "axios";
import { AddIcon } from "../../public/icons";
import { Button } from "./Button";

interface AddProductModalProps {
  tabId: number;
  products: Product[];
  closeAddProductModalAction: () => void;
}

export function AddProductModal({
  tabId,
  products,
  closeAddProductModalAction,
  fetchTabs,
}: AddProductModalProps & { fetchTabs: () => Promise<void> }) {
  const [productsAmmount, setProductsAmmount] = useState(
    products.map((product) => ({
      id: product.id,
      ammount: 0,
    }))
  );

  async function addProductToTab(tabId, product) {
    try {
      const response = await axios.post("http://localhost:8080/tab-items", {
        tabId: tabId,
        productId: product.id,
        ammount: product.ammount,
      });
      if (response.status !== 200) {
        throw new Error("Erro ao adicionar o produto à comanda");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 bottom-0 bg-black opacity-50"
        onClick={closeAddProductModalAction}
      />
      <div className="fixed w-[400px] h-auto top-40 left-[calc(50%-200px)] bg-white rounded-2xl p-4 flex flex-col items-center">
        <h2 className="text-center text-2xl font-bold mb-4">
          Adicionar produto
        </h2>
        {products.map((product) => {
          const productAmmount = productsAmmount.find(
            (productAmmount) => productAmmount.id === product.id
          );
          return (
            <div
              key={product.id}
              className="flex gap-2 justify-between py-2 w-full"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">{product.name}</h3>
                <p>R${product.price}</p>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  onClick={() =>
                    setProductsAmmount((prev) => {
                      const newProductsAmmount = prev.map((productAmmount) => {
                        if (
                          productAmmount.id === product.id &&
                          productAmmount.ammount > 0
                        ) {
                          return {
                            ...productAmmount,
                            ammount: productAmmount.ammount - 1,
                          };
                        }
                        return productAmmount;
                      });
                      return newProductsAmmount;
                    })
                  }
                  className="rounded-full border border-system-black w-8 h-8 grid place-items-center"
                >
                  <span className="text-4xl relative top-[-7px]">-</span>
                </button>

                <span className="text-lg font-semibold">
                  {productAmmount?.ammount ?? "0"}
                </span>
                <button
                  onClick={() =>
                    setProductsAmmount((prev) => {
                      const newProductsAmmount = prev.map((productAmmount) => {
                        if (productAmmount.id === product.id) {
                          return {
                            ...productAmmount,
                            ammount: productAmmount.ammount + 1,
                          };
                        }
                        return productAmmount;
                      });
                      return newProductsAmmount;
                    })
                  }
                  className="rounded-full border border-system-black w-8 h-8 grid place-items-center"
                >
                  <AddIcon />
                </button>
              </div>
            </div>
          );
        })}
        <Button
          action={async () => {
            for (const product of productsAmmount) {
              if (product.ammount > 0) {
                await addProductToTab(tabId, product);
              }
            }
            await fetchTabs();
            closeAddProductModalAction();
          }}
        >
          Concluir
        </Button>
      </div>
    </>
  );
}
