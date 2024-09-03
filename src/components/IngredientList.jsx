import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => {
        return (
          <li
            key={index}
            style={{
              backgroundColor: `${ingredient.color}`,
              cursor: "pointer",
            }}
            onClick={() => addToBurger(ingredient)}
          >
            <Ingredient ingredient={ingredient} isIngredient={true} />
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
