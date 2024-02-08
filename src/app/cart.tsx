import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";

import { useCartStore } from "@/store/cart-store";

import { Header } from "@/components/header";
import { ProductCartList } from "@/components/product-cart-list";

import { formatCurrency } from "@/helpers/format-currency";

export default function Cart() {
  const cart = useCartStore()
  const total = useMemo(() => formatCurrency(cart.calcTotal()), [])
  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <ScrollView>
        <ProductCartList products={cart.products} />
        <View className="flex-row gap-2 items-center mt-5 mb-4 ml-3">
          <Text className="text-white text-xl font-subtitle">Total:</Text>
          <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
        </View>
      </ScrollView>
    </View>
  )
}