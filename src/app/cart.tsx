import { Cart } from "@/modules/order-checkout/templates/cart";
import { makeMessage } from "@/services/message";

const phone = process.env.EXPO_PUBLIC_PHONE
const messageService = makeMessage()

export default function Checkout() {
  return <Cart sendMessage={(message) => phone && messageService.send(phone, message)} />
}
