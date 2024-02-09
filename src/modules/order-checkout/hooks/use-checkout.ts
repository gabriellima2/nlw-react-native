import { useState } from "react"
import { Alert } from "react-native"

import { useTotalPriceInCurrencyFormat } from "@/hooks/use-total-price-in-currency-format"
import { useCartStore } from "@/store/cart-store"

export type UseCheckoutParams = {
	afterCheckout?: () => void
	sendMessage: (message: string) => void
}

export type UseCheckoutReturn = {
	onAddressChange: (text: string) => void
	handleOrderCheckout: () => void
}

export function useCheckout(params: UseCheckoutParams): UseCheckoutReturn {
	const { afterCheckout, sendMessage } = params
	const cart = useCartStore()
	const [address, setAddress] = useState('')
	const totalPrice = useTotalPriceInCurrencyFormat()

  const createOrderDetailsMessage = (products: string, address: string) => {
    return `
      NOVO PEDIDO
      \n Entregar em: ${address}

      ${products}

      \n Valor total: ${totalPrice}
    `
  }

  const handleOrderCheckout = () => {
    const formattedAddress = address.trim()
    if (!address.length) return Alert.alert('Pedido', 'Por favor, informe o seu endereço!')
    const products = cart.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join('')
    sendMessage(createOrderDetailsMessage(products, formattedAddress))
    afterCheckout && afterCheckout()
	}

	return {
		onAddressChange: setAddress,
		handleOrderCheckout,
	}
}
