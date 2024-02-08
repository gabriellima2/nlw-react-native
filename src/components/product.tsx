import { forwardRef } from "react";
import { Image, Text, TouchableOpacity, View, type ImageSourcePropType, type TouchableOpacityProps } from "react-native";

import { cn } from "@/helpers/cn";

type ProductProps = TouchableOpacityProps & {
  title: string
  description: string
  quantity?: number
  thumbnail: ImageSourcePropType
}

export const Product = forwardRef<TouchableOpacity, ProductProps>((props, ref) => {
  const { title, description, thumbnail, quantity, className, ...rest } = props
  return (
    <TouchableOpacity ref={ref} className={cn(className, "w-full flex-row items-center pb-4")} {...rest}>
      <Image source={thumbnail} className="w-20 h-20 rounded-md" />
      <View className="flex-1 ml-3">
        <View className="flex-row items-center">
          <Text className="text-slate-100 font-subtitle text-base flex-1">{title}</Text>
          {quantity && <Text className="text-slate-400 font-subtitle text-sm">x {quantity}</Text>}
        </View>
        <Text className="text-slate-400 text-xs leading-5 mt-0.5">{description}</Text>
      </View>
    </TouchableOpacity>
  )
})