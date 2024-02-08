import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useCartStore } from "@/store/cart-store";

import { ProductCartList } from "@/components/product-cart-list";
import { Header } from "@/components/header";
import { Input } from "@/components/input";

import { formatCurrency } from "@/helpers/format-currency";

export default function Cart() {
  const cart = useCartStore()
  const total = useMemo(() => formatCurrency(cart.calcTotal()), [])
  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="flex-1 p-5">
            <ProductCartList products={cart.products} />
            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-white text-xl font-subtitle">Total:</Text>
              <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
            </View>
            <Input
              multiline
              textAlignVertical="top"
              placeholder="Ex: Rua dos Lanches, Jardim das Batatas, 07115-000, número 123, apartamento 45B"
              className="h-32"
              />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  )
}