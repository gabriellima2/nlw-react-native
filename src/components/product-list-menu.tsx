import { forwardRef } from "react";
import { Link } from "expo-router";
import { SectionList, Text, type ImageSourcePropType } from "react-native";

import { Product } from "./product";
import { MENU, type ProductProps } from "@/data/products";

export const ProductListMenu = forwardRef<SectionList<ProductProps>>((_, ref) => {
  return (
    <SectionList
      ref={ref}
      sections={MENU}
      keyExtractor={(item) => item.id}
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
      className="p-5 flex-1"
      contentContainerStyle={{ paddingBottom: 100 }}
      renderSectionHeader={({ section }) => (
        <Text className="text-xl font-heading mt-8 mb-3 text-white">{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <Link href={`/product/${item.id}`} asChild>
          <Product
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail as ImageSourcePropType}
          />
        </Link>
  
      )}
    />
  )
})

ProductListMenu.displayName = 'ProductListMenu'