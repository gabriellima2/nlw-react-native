import { useRef } from "react";
import { SectionList, View } from "react-native";

import { ProductCategories } from "@/components/product-categories";
import { ProductListMenu } from "@/components/product-list-menu";
import { Header } from "@/components/header";

import { CATEGORIES } from "@/data/products";

export default function Home() {
  const listRef = useRef<SectionList | null>(null)

  const handleCategoryChange = (selectedCategory: string) => {
    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)
    if (!listRef.current) return
    listRef.current.scrollToLocation({
      animated: true,
      sectionIndex,
      itemIndex: 0
    })
  }

  return (
    <View className="pt-8 flex-1">
      <Header title="Faça seu pedido" />
      <ProductCategories initialCategory={null} onCategoryChange={handleCategoryChange} />
      <ProductListMenu ref={listRef} />
    </View>
  )
}