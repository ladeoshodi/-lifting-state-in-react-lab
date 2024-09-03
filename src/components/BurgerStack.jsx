// `src/components/BurgerStack.jsx`
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
            <div>{ingredient.name}</div>{" "}
            <div style={{ fontSize: "1.3rem" }}>x</div>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
