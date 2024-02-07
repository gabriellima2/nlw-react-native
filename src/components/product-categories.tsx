import { useState } from "react";
import { FlatList } from "react-native";

import { Category } from "./category";
import { CATEGORIES } from "@/data/products";

export type ProductCategoriesProps = {
  initialCategory?: string | null
  onCategoryChange: (category: string) => void
}

const defaultCategory = CATEGORIES[0]

export function ProductCategories(props: ProductCategoriesProps) {
  const { initialCategory, onCategoryChange } = props
  const [currentCategory, setCurrentCategory] = useState<string>(initialCategory ?? defaultCategory)
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Category
          title={item}
          isSelected={!!currentCategory && item === currentCategory}
          onPress={() => {
            setCurrentCategory(item)
            onCategoryChange(item)
          }} />
      )}
      className="max-h-10 mt-5"
      contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}