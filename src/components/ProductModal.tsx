import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Button";

interface ProductModalProps {
  productId?: number;
  closeProductModalAction: () => void;
  fetchProducts: () => Promise<void>;
}

export function ProductModal({
  productId,
  closeProductModalAction,
  fetchProducts,
}: ProductModalProps) {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    productCode: "",
    imageUrl: "",
    unitCost: 0,
    groupName: "",
  });

  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:8080/products/${productId}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar o produto:", error);
        });
    }
  }, [productId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (productId) {
        // Editar produto
        await axios.put(`http://localhost:8080/products/${productId}`, product);
      } else {
        // Criar produto
        await axios.post("http://localhost:8080/products", product);
      }
      await fetchProducts(); // Atualizar lista de produtos
      closeProductModalAction();
    } catch (error) {
      console.error("Erro ao salvar o produto:", error);
    }
  };

  const handleDelete = async () => {
    if (productId) {
      try {
        await axios.delete(`http://localhost:8080/products/${productId}`);
        await fetchProducts(); // Atualizar lista de produtos após a exclusão
        closeProductModalAction();
      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
      }
    }
  };

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 bottom-0 bg-black opacity-50"
        onClick={closeProductModalAction}
      />
      <div className="fixed w-[400px] h-auto top-40 left-[calc(50%-200px)] bg-white rounded-2xl p-4 flex flex-col items-center">
        <h2 className="text-center text-2xl font-bold mb-4">
          {productId ? "Editar Produto" : "Criar Produto"}
        </h2>
        <div className="w-full mb-4">
          <label className="block mb-1">Nome</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block mb-1">Preço</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block mb-1">Código do Produto</label>
          <input
            type="text"
            name="productCode"
            value={product.productCode}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block mb-1">URL da Imagem</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block mb-1">Custo Unitário</label>
          <input
            type="number"
            name="unitCost"
            value={product.unitCost}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block mb-1">Grupo</label>
          <input
            type="text"
            name="groupName"
            value={product.groupName}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-3">
          {productId && (
            <Button action={handleDelete} color="red">
              Excluir
            </Button>
          )}
          <Button action={handleSubmit}>
            {productId ? "Atualizar" : "Criar"}
          </Button>
        </div>
      </div>
    </>
  );
}
