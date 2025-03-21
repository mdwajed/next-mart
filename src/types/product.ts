export interface IProduct {
  _id: string;
  image: string;
  name: string;
  brand: string;
  price: number;
  category:
    | "Writing"
    | "Office Supplies"
    | "Art Supplies"
    | "Educational"
    | "Technology";
  description: string;
  quantity: number;
  inStock?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
