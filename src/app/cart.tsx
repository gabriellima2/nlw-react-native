import { Text, View } from "react-native";

import { useCartStore } from "@/store/cart-store";

import { Header } from "@/components/header";
import { Product } from "@/components/product";

export default function Cart() {
  const cart = useCartStore()
  const hasProductsInCart = !!cart.products.length
  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <View className="flex-1 p-5">
        {!hasProductsInCart && (
          <View className="flex-1 items-center justify-center">
            <Text className="font-body text-slate-400 my-8">Seu carrinho está vazio!</Text>
          </View>
        )}
        {hasProductsInCart && (
          <>
            {cart.products.map((product) => (
              <Product
                key={product.id}
                title={product.title}
                description={product.description}
                thumbnail={product.thumbnail}
                quantity={product.quantity}
              />
            ))}
          </>
        )}
      </View>
    </View>
  )
}