import { View } from "react-native";

import { EmptyCartMessage } from "./empty-cart-message";
import { Product } from "./product";

import type { Product as ProductCart } from "@/store/cart-store";

type ProductCartListProps = {
  products: ProductCart[]
}

export function ProductCartList(props: ProductCartListProps) {
  const { products } = props
  const hasProductsInCart = !!products.length
  return (
    <>
      {!hasProductsInCart && <EmptyCartMessage />}
      {hasProductsInCart && products.map((product) => (
        <View key={product.id} className="border-b border-slate-700">
          <Product
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            quantity={product.quantity}
          />
        </View>
      ))}
    </>
  )
}