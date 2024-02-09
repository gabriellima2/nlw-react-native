import { useLocalSearchParams, useNavigation } from "expo-router"

import { useGetProductByID } from "@/hooks/use-get-product-by-id"
import { useCartStore } from "@/store/cart-store"

import type { ProductProps } from "@/data/products"

export type UseProductDetailsReturn = {
	product: ProductProps | undefined
	handleAddToCart: (product: ProductProps) => void
}

export function useProductDetails(): UseProductDetailsReturn {
	const { id } = useLocalSearchParams()
	const { product } = useGetProductByID(id as string)
  const navigation = useNavigation()
	const cart = useCartStore()

  const handleAddToCart = (product: ProductProps) => {
    cart.add(product)
    navigation.goBack()
  }

	return {
		product,
		handleAddToCart
	}
}
