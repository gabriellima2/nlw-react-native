import { useCartStore } from "@/store/cart-store";
import { formatCurrency } from "@/helpers/format-currency";

export function useTotalPriceInCurrencyFormat(): string {
	const cart = useCartStore()
	return formatCurrency(cart.calcTotal())
}
