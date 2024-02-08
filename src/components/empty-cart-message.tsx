import { Text, View } from "react-native";

export function EmptyCartMessage() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-body text-slate-400 my-8">Seu carrinho está vazio!</Text>
    </View>
  )
}