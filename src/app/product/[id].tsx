import { useMemo } from "react";
import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ProductIngredients } from "@/components/product-ingredients";

import { formatCurrency } from "@/helpers/format-currency";
import { PRODUCTS } from "@/data/products";

export default function Product() {
  const { id } = useLocalSearchParams()
  const product = useMemo(() => (
    PRODUCTS.filter((product) => product.id === id)[0]
  ), [id])
  return (
    <View className="flex-1">
      <Image source={product.cover} resizeMode="cover" className="w-full h-52" />
      <View className="p-5 mt-8 flex-1">
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
    </View>
  )
}