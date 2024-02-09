import { Pressable, Text, type PressableProps } from "react-native";
import { cn } from "@/helpers/cn";

export type CategoryProps = PressableProps & {
  title: string
  isSelected?: boolean
}

export function Category(props: CategoryProps) {
  const { title, isSelected, className, ...rest } = props
  return (
    <Pressable
      className={cn(
        className,
        "bg-slate-800 px-4 justify-center rounded-md h-10 border-2 border-transparent",
        isSelected && 'border-lime-300'
      )}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  )
}
