import { Text, View } from "react-native";

import { useCartStore } from "@/store/cart-store";

import { Header } from "@/components/header";
import { ProductCartList } from "@/components/product-cart-list";

export default function Cart() {
  const cart = useCartStore()
  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <ProductCartList products={cart.products} />
    </View>
  )
}