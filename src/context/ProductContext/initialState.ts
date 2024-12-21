import { Product } from "@/models/command";

const productsInitialState = {
  products: [
    {
      id: 1,
      name: "Cerveja Heineken 600ml",
      imageUrl: "https://www.heineken.com/media-la/01pfxdqq/heineken-original-bottle.png?quality=85",
      productCode: "123456",
      price: '13.00',
      unitCost: '5.00',
      group: 'Bebidas',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toDateString(),
    },
    {
      id: 2,
      name: "Frango a passarinho",
      imageUrl: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/08/01/frango-passarinho-molho-pimenta.jpg",
      productCode: "123457",
      price: '25.00',
      unitCost: '10.00',
      group: 'Bebidas',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toDateString(),
    },
    {
      id: 3,
      name: "Água mineral c/ gás",
      imageUrl: "https://bretas.vtexassets.com/arquivos/ids/217309-800-auto?v=638478583397970000&width=800&height=auto&aspect=true",
      productCode: "123458",
      price: '30.00',
      unitCost: '15.00',
      group: 'Bebidas',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toDateString(),
    }
  ] as Product[],
}

export default productsInitialState;
