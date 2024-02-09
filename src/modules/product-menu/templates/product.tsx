import { useMemo } from "react";
import { Image, Text, View } from "react-native";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useCartStore } from "@/store/cart-store";

import { ProductIngredients } from "../components/product-ingredients";
import { LinkButton } from "@/ui/components/link-button";
import { Button } from "@/ui/components/button";

import { formatCurrency } from "@/helpers/format-currency";
import { PRODUCTS, type ProductProps } from "@/data/products";

export function Product() {
  const { id } = useLocalSearchParams()
  const navigation = useNavigation()
  const cart = useCartStore()

  const handleAddToCart = (product: ProductProps) => {
    cart.add(product)
    navigation.goBack()
  }

  const product = useMemo(() => (
    PRODUCTS.find((product) => product.id === id)
  ), [id])

  if (!product) return <Redirect href='/' />

  return (
    <View className="flex-1">
      <Image source={product.cover} resizeMode="cover" className="w-full h-52" />
      <View className="p-5 mt-8 flex-1">
        <Text className="text-white text-xl font-heading">{product.title}</Text>
        <Text
          className="text-lime-400 text-2xl font-heading my-2"
        >
          {formatCurrency(product.price)}
        </Text>
        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>
        <ProductIngredients ingredients={product.ingredients} />
      </View>
      <View className="p-5 pb-8 gap-5">
        <Button onPress={() => handleAddToCart(product)}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
            <Button.Text>Adicionar ao pedido</Button.Text>
          </Button.Icon>
        </Button>
        <LinkButton href="/">Voltar ao cardápio</LinkButton>
      </View>
    </View>
  )
}
