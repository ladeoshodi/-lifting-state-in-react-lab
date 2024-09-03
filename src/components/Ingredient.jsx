function Ingredient({ ingredient, isIngredient }) {
  return (
    <>
      <div>{ingredient.name}</div>
      <div style={{ fontSize: "1.3rem" }}>{isIngredient ? "+" : "x"}</div>
    </>
  );
}

export default Ingredient;
