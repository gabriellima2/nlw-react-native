import { Image, Text, View } from "react-native";

import { CartButton } from "./cart-button";
import { Logo } from "./logo";

export type HeaderProps = {
  title: string
}

export function Header(props: HeaderProps) {
  const { title } = props
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Logo />
        <Text className="text-white text-xl font-heading mt-2">
          {title}
        </Text>
      </View>
      <CartButton productsAmount={1} />
    </View>
  )
}