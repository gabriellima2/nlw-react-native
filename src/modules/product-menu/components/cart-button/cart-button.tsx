import { forwardRef } from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import { CartIndicator } from "./components/cart-indicator";
import { cn } from "@/helpers/cn";

export type CartButtonProps = Omit<TouchableOpacityProps, 'children'> & {
  productsAmount?: number | string
}

export const CartButton = forwardRef<TouchableOpacity, CartButtonProps>((props, ref) => {
  const { productsAmount, className, ...rest } = props
  if (productsAmount === undefined) return
  return (
    <TouchableOpacity className={cn(className, 'relative')} activeOpacity={0.7} {...rest}>
      <CartIndicator amount={productsAmount} className="top-2 z-10 -right-3.5" />
      <Feather name="shopping-bag" color={colors.white} size={24} />
    </TouchableOpacity>
  )
})

CartButton.displayName = 'CartButton'
