import { Category } from "@/components/category";
import { Header } from "@/components/header";
import { ProductCategories } from "@/components/product-categories";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="pt-8">
      <Header title="Faça seu pedido" />
      <ProductCategories initialCategory={null} />
    </View>
  )
}