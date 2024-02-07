import { SectionList, Text, type ImageSourcePropType } from "react-native";

import { Product } from "./product";
import { MENU } from "@/data/products";
import { forwardRef } from "react";

export const ProductListMenu = forwardRef<SectionList>((_, ref) => {
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
        <Product
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnail as ImageSourcePropType}
        />
      )}
    />
  )
})

ProductListMenu.displayName = 'ProductListMenu'