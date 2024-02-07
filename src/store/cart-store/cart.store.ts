import { create } from "zustand";

import type { CartStoreProperties } from "./@types/cart-store-properties";
import type { Product } from "./@types/product";
import type { ProductProps } from "@/data/products";

export const useCartStore = create<CartStoreProperties>((set, get) => ({
  products: [] as Product[],
  add: (product: ProductProps) => {
    const { products } = get()
    const alreadyAdded = products.some(({ id }) => product.id === id)
    if (!alreadyAdded) {
      return set((state) => ({ ...state, products: [ ...products, { ...product, quantity: 1 } ] }))
    }
    const updatedProducts = products.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, quantity: cartProduct.quantity + 1 }
      }
      return cartProduct
    })
    set((state) => ({ ...state, products: updatedProducts }))
  },
  calcAmount: () => {
    const { products } = get()
    return products.reduce((amount, product) => amount + product.quantity, 0)
  }
}))