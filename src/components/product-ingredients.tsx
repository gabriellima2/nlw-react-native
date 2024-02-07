import { Text } from "react-native"

type ProductIngredientsProps = {
  ingredients: string[]
}

export function ProductIngredients(props: ProductIngredientsProps) {
  const { ingredients } = props
  return (
    <>
      {ingredients.map((ingredient) => (
        <Text key={ingredient} className="text-slate-400 font-body text-base leading-6">
          {"\u2022"} {ingredient}
        </Text>
      ))}
    </>
  )
}