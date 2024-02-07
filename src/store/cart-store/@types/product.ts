import type { ProductProps } from "@/data/products"

export type Product = ProductProps & {
    quantity: number
}