import { ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";

import { useCheckout } from "../hooks/use-checkout";
import { useCart } from "../hooks/use-cart";

import { ProductCartList } from "../components/product-cart-list";
import { LinkButton } from "@/ui/components/link-button";
import { Button } from "@/ui/components/button";
import { Header } from "@/ui/components/header";
import { Input } from "@/ui/components/input";

type CartParams = {
	sendMessage: (message: string) => void
}

export function Cart(params: CartParams) {
	const { sendMessage } = params
	const { products, totalPrice, handleProductRemove, resetCart } = useCart()
	const { handleOrderCheckout, onAddressChange } = useCheckout({ sendMessage, afterCheckout: resetCart })
  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="flex-1 p-5">
            <ProductCartList products={products} onRemove={handleProductRemove} />
            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-white text-xl font-subtitle">Total:</Text>
              <Text className="text-lime-400 text-2xl font-heading">{totalPrice}</Text>
            </View>
            <Input
              multiline
              onChangeText={onAddressChange}
              textAlignVertical="top"
              onSubmitEditing={handleOrderCheckout}
              returnKeyType="send"
              blurOnSubmit
							className="h-28"
              placeholder="Ex: Rua dos Lanches, Jardim das Batatas, 07115-000, número 123, apartamento 45B"
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="p-5 gap-5">
        <Button onPress={handleOrderCheckout}>
          <Button.Text>Enviar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>
        <LinkButton href="/">
          Voltar ao cardápio
        </LinkButton>
      </View>
    </View>
  )
}
