import Ingredient from "./Ingredient";

const BurgerStack = ({ burger, removeFromBurger }) => {
  return (
    <ul>
      {burger.map((ingredient, index) => {
        return (
          <li
            key={index}
            style={{
              backgroundColor: `${ingredient.color}`,
              cursor: "pointer",
            }}
            onClick={() => removeFromBurger(index)}
          >
            <Ingredient ingredient={ingredient} isIngredient={false} />
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
