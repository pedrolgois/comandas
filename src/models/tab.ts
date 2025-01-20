export type Tab = {
  id: string;
  customer: string;
  status: "active" | "paid" | "cancelled" | "pending";
  tableNumber: number;
  items: {
    id: string;
    ammount: number;
    subtotal: number;
  }[];
  total: number;

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
};

export type Group = {
  id: string;
  name: string;
};
