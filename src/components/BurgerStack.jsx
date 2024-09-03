import Ingredient from "./Ingredient";

const BurgerStack = ({ burger, removeFromBurger }) => {
  if (!burger.length)
    return (
      <div style={{ border: "1px dotted red", padding: "8px" }}>
        Missing Ingredients 😢, select ingredients on the left to build your
        burger 🍔!
      </div>
    );
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
