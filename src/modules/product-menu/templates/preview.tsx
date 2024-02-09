import { useRef } from "react";
import { SectionList, View } from "react-native";
import { Link } from "expo-router";

import { useCartStore } from "@/store/cart-store";

import { ProductCategories } from "../components/product-categories";
import { ProductListMenu } from "../components/product-list-menu";
import { CartButton } from "../components/cart-button";
import { Header } from "@/ui/components/header";

import { CATEGORIES, type ProductProps } from "@/data/products";

export function Preview() {
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
        renderRight={() => (
          <Link href='/cart' asChild>
            <CartButton productsAmount={cart.calcAmount()} />
          </Link>
        )}
      />
      <ProductCategories initialCategory={null} onCategoryChange={handleCategoryChange} />
      <ProductListMenu ref={listRef} />
    </View>
  )
}
