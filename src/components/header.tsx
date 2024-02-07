import { Text, View } from "react-native";
import { Logo } from "./logo";

export type HeaderProps = {
  title: string
  renderRight?: () => JSX.Element
}

export function Header(props: HeaderProps) {
  const { title, renderRight } = props
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Logo />
        <Text className="text-white text-xl font-heading mt-2">
          {title}
        </Text>
      </View>
      {renderRight && renderRight()}
    </View>
  )
}