import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

import { useCartStore, type Product } from "@/store/cart-store";

import { ProductCartList } from "@/components/product-cart-list";
import { LinkButton } from "@/components/link-button";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Input } from "@/components/input";

import { formatCurrency } from "@/helpers/format-currency";
import { makeMessage } from "@/services/message";

const phone = process.env.EXPO_PUBLIC_PHONE
const message = makeMessage()

export default function Cart() {
  const cart = useCartStore()
  const navigation = useNavigation()
  const [address, setAddress] = useState('')

  const handleProductRemove = (product: Product) => {
    Alert.alert('Remover', `Deseja remover ${product.title} do carrinho?`, [
      { text: 'Cancelar' },
      { text: 'Remover', onPress: () => cart.remove(product.id) }
    ])
  }

  const createOrderDetailsMessage = (products: string, address: string) => {
    return `
      NOVO PEDIDO
      \n Entregar em: ${address}

      ${products}

      \n Valor total: ${formatCurrency(cart.calcTotal())}
    `
  }

  const handleSendMessage = (phone: string, content: string) => {
    message.send(phone, content)
  }

  const reset = () => {
    cart.clear()
    navigation.goBack()
  }

  const handleOrderCheckout = () => {
    const formattedAddress = address.trim()
    if (!address.length) return Alert.alert('Pedido', 'Por favor, informe o seu endereço!')
    const products = cart.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join('')
    if (!phone) return
    handleSendMessage(phone, createOrderDetailsMessage(products, formattedAddress))
    reset()
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="flex-1 p-5">
            <ProductCartList products={cart.products} onRemove={handleProductRemove} />
            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-white text-xl font-subtitle">Total:</Text>
              <Text className="text-lime-400 text-2xl font-heading">{formatCurrency(cart.calcTotal())}</Text>
            </View>
            <Input
              multiline
              onChangeText={setAddress}
              textAlignVertical="top"
              onSubmitEditing={handleOrderCheckout}
              returnKeyType="send"
              blurOnSubmit
              placeholder="Ex: Rua dos Lanches, Jardim das Batatas, 07115-000, número 123, apartamento 45B"
              className="h-32"
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