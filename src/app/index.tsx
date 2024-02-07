import { View } from "react-native";

import { ProductCategories } from "@/components/product-categories";
import { ProductListMenu } from "@/components/product-list-menu";
import { Header } from "@/components/header";

import { MENU } from "@/data/products";

export default function Home() {
  return (
    <View className="pt-8 flex-1">
      <Header title="Faça seu pedido" />
      <ProductCategories initialCategory={null} />
      <ProductListMenu />
    </View>
  )
}