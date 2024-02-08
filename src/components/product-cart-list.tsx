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
    <View className="flex-1 p-5">
      {!hasProductsInCart && <EmptyCartMessage />}
      {hasProductsInCart && products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          thumbnail={product.thumbnail}
          quantity={product.quantity}
        />
      ))}
    </View>
  )
}