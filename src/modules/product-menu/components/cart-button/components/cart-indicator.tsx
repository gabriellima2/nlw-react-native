import { Text } from "react-native";
import { Indicator, type IndicatorProps } from "@/ui/components/indicator";

type CartIndicatorProps = IndicatorProps & {
  amount?: number | string
}

export function CartIndicator(props: CartIndicatorProps) {
  const { amount = 0, ...rest } = props
  return (
    <Indicator {...rest}>
      <Text className="text-slate-900 font-bold text-xs">{amount}</Text>
    </Indicator>
  )
}
