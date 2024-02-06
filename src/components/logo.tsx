import { cn } from "@/helpers/cn";
import { Image, type ImageProps } from "react-native";

type LogoProps = ImageProps

export function Logo(props: LogoProps) {
  const { className, ...rest } = props
  return <Image source={require('@/assets/logo.png')} className={cn(className, 'w-32 h-6')} {...rest} />
}