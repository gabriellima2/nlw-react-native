import type { ProductProps } from "@/data/products";
import { Product } from "./product";

export type CartStoreProperties = {
  products: Product[]
  add: (product: ProductProps) => void
  calcAmount: () => number
  calcTotal: () => number
}