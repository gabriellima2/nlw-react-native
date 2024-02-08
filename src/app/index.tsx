import { useRef } from "react";
import { SectionList, View } from "react-native";

import { useCartStore } from "@/store/cart-store";

import { ProductCategories } from "@/components/product-categories";
import { ProductListMenu } from "@/components/product-list-menu";
import { CartButton } from "@/components/cart-button";
import { Header } from "@/components/header";

import { CATEGORIES, type ProductProps } from "@/data/products";

export default function Home() {
  const cart = useCartStore()
  const listRef = useRef<SectionList<ProductProps> | null>(null)

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
      <Header
        title="Faça seu pedido"
        renderRight={() => <CartButton productsAmount={cart.calcAmount()} />}
      />
      <ProductCategories initialCategory={null} onCategoryChange={handleCategoryChange} />
      <ProductListMenu ref={listRef} />
    </View>
  )
}