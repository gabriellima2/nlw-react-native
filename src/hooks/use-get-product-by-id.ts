import { useMemo } from "react"
import { PRODUCTS, ProductProps } from "@/data/products"

export type UseGetProductByIDReturn = {
	product: ProductProps | undefined
}

export function useGetProductByID(id: string): UseGetProductByIDReturn {
	const product = useMemo(() => (
    PRODUCTS.find((product) => product.id === id)
	), [id])
	return { product }
}
