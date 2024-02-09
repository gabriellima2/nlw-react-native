import { Alert } from "react-native"
import { useNavigation } from "expo-router"

import { useTotalPriceInCurrencyFormat } from "@/hooks/use-total-price-in-currency-format"
import { useCartStore, type Product } from "@/store/cart-store"

export type UseCartReturn = {
	products: Product[]
	totalPrice: string
	resetCart: () => void
	handleProductRemove: (product: Product) => void
}

export function useCart(): UseCartReturn {
	const cart = useCartStore()
	const navigation = useNavigation()
	const totalPrice = useTotalPriceInCurrencyFormat()

  const handleProductRemove = (product: Product) => {
    Alert.alert('Remover', `Deseja remover ${product.title} do carrinho?`, [
      { text: 'Cancelar' },
      { text: 'Remover', onPress: () => cart.remove(product.id) }
    ])
	}

  const resetCart = () => {
    cart.clear()
    navigation.goBack()
	}

	return {
		products: cart.products,
		totalPrice,
		handleProductRemove,
		resetCart
	}
}
