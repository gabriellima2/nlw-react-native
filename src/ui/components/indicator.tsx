import { View, type ViewProps } from "react-native"
import { cn } from "@/helpers/cn"

export type IndicatorProps = ViewProps

export function Indicator(props: IndicatorProps) {
  const { className, ...rest } = props
  return <View className={cn(className, "bg-lime-300 w-4 h-4 rounded-full items-center justify-center")} {...rest} />
}
