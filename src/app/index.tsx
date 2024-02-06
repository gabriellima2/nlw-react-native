import { View } from "react-native";

import { ProductCategories } from "@/components/product-categories";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <View className="pt-8">
      <Header title="Faça seu pedido" />
      <ProductCategories initialCategory={null} />
    </View>
  )
}