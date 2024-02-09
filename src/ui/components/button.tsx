import { type PropsWithChildren } from "react";
import {
  Text as RNText,
  TouchableOpacity,
  type TouchableOpacityProps,
  type TextProps
} from "react-native";

import { cn } from "@/helpers/cn";

type ButtonProps = TouchableOpacityProps
type IconProps = PropsWithChildren

function Button(props: ButtonProps) {
  const { className, children, ...rest } = props
  return (
    <TouchableOpacity
      className={cn(className, 'h-12 bg-lime-400 rounded-md items-center justify-center flex-row')}
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

function Text(props: TextProps) {
  const { className, children, ...rest } = props
  return (
    <RNText className={cn(className, 'text-black font-heading text-base mx-2')} {...rest}>
      {children}
    </RNText>
  )
}

function Icon(props: IconProps) {
  const { children } = props
  return children
}

Button.Text = Text
Button.Icon = Icon

export { Button }
