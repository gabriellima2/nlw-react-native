import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import type { CartStoreProperties } from "./@types/cart-store-properties";
import type { ProductProps } from "@/data/products";
import type { Product } from "./@types/product";

export const useCartStore = create(
  persist<CartStoreProperties>((set, get) => ({
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
    remove: (id: string) => {
      const { products } = get()
      const productsWithUpdatedQuantity = products.map((product) => {
        if (product.id !== id) return product
        return { ...product, quantity: !!product.quantity ? product.quantity - 1 : 0 }
      })
      const updatedProducts = productsWithUpdatedQuantity.filter((product) => !!product.quantity)
      set((state) => ({ ...state, products: updatedProducts }))
    },
    clear: () => set((state) => ({ ...state, products: [] })),
    calcAmount: () => {
      const { products } = get()
      return products.reduce((amount, product) => amount + product.quantity, 0)
    },
    calcTotal: () => {
      const { products } = get()
      return products.reduce((total, product) => total + product.price * product.quantity, 0)
    }
  }), {
    name: 'nlw-expert:cart',
    storage: createJSONStorage(() => AsyncStorage)
  })
)