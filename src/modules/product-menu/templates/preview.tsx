import { View } from "react-native";
import { Link } from "expo-router";

import { ProductCategories } from "../components/product-categories";
import { ProductListMenu } from "../components/product-list-menu";
import { CartButton } from "../components/cart-button";
import { Header } from "@/ui/components/header";

import { useProductsPreview } from "../hooks/use-products-preview";

export function Preview() {
  const { listRef, productsAmount, handleCategoryChange } = useProductsPreview()
  return (
    <View className="pt-8 flex-1">
      <Header
        title="Faça seu pedido"
        renderRight={() => (
          <Link href='/cart' asChild>
            <CartButton productsAmount={productsAmount} />
          </Link>
        )}
      />
      <ProductCategories initialCategory={null} onCategoryChange={handleCategoryChange} />
      <ProductListMenu ref={listRef} />
    </View>
  )
}
