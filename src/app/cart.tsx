import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";

import { useCartStore } from "@/store/cart-store";

import { ProductCartList } from "@/components/product-cart-list";
import { LinkButton } from "@/components/link-button";
import { Button } from "@/components/button";
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
      <View className="p-5 gap-5">
        <Button>
          <Button.Text>Enviar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>
        <LinkButton href="/">
          Voltar ao cardápio
        </LinkButton>
      </View>
    </View>
  )
} 