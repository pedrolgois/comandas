export type Command = {
  id: string;
  client: string;
  status: "active"| "paid" | "cancelled" | "pending";
  selectedTable: number;
  products: {
    id: string;
    ammount: number;
  }[];

  openedAt: string;
  closedAt?: string;
};

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  productCode: string;
  unitCode: string;
  price: string;
  unitCost: string;
  group: string;

  createdAt?: string;
  updatedAt?: string;
}

export type Group = {
  id: string;
  name: string;
}
