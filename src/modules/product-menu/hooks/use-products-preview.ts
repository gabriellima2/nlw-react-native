import { useRef } from "react"
import { SectionList } from "react-native"

import { useCartStore } from "@/store/cart-store"
import { CATEGORIES, type ProductProps } from "@/data/products"

export type UseProductsPreviewReturn = {
	listRef:  React.MutableRefObject<SectionList<ProductProps> | null>
	productsAmount: number
	handleCategoryChange: (selectedCategory: string) => void
}

export function useProductsPreview(): UseProductsPreviewReturn {
  const cart = useCartStore()
  const listRef = useRef<SectionList<ProductProps> | null>(null)

  const handleCategoryChange = (selectedCategory: string) => {
    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)
    if (!listRef.current) return
    listRef.current.scrollToLocation({
      animated: true,
      sectionIndex,
      itemIndex: 0
    })
	}

	return {
		listRef,
		productsAmount: cart.calcAmount(),
		handleCategoryChange
	}
}
