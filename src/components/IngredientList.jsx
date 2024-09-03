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
            <div>{ingredient.name}</div>{" "}
            <div style={{ fontSize: "1.3rem" }}>+</div>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
