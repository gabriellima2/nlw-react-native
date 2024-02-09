import { forwardRef } from "react";
import { TextInput, type TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

import { cn } from "@/helpers/cn";

type InputProps = TextInputProps

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { className, ...rest } = props
  return (
    <TextInput
      ref={ref}
      className={cn(className, 'bg-slate-800 rounded-md px-4 py-3 font-body text-sm text-white')}
      placeholderTextColor={colors.slate[400]}
      {...rest}
    />
  )
})

Input.displayName = 'Input'
