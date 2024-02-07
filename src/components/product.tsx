import { Image, Text, TouchableOpacity, View, type ImageSourcePropType, type TouchableOpacityProps} from "react-native";
import { cn } from "@/helpers/cn";

type ProductProps = TouchableOpacityProps & {
  title: string
  description: string
  thumbnail: ImageSourcePropType
}

export function Product(props: ProductProps) {
  const { title, description, thumbnail, className, ...rest } = props
  return (
    <TouchableOpacity className={cn(className, "w-full flex-row items-center pb-4")}>
      <Image source={thumbnail} className="w-20 h-20 rounded-md" />
      <View className="flex-1 ml-3">
        <Text className="text-slate-100 font-subtitle text-base flex-1">{title}</Text>
        <Text className="text-slate-400 text-xs leading-5 mt-0.5">{description}</Text>
      </View>
    </TouchableOpacity>
  )
}