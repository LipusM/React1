const c = console.log.bind(document);

import "./style.scss";
import classnames from "classnames"

const Food = ({name, calories, protein, carbohydrates, fats, fiber, category}) => {

    //Třídy pomocí ternárního operátoru (takhle řešeno před bonusovou části)
    {/* <table className={calories >= 500 ? "kcal-high" : (calories >= 250 && "kcal-medium") }> */}

  return (
    <table className={classnames(
        {
            "kcal-high": calories >= 500,
            "kcal-medium": calories >= 250 && calories <= 499.9,
            vegetables: category === "zelenina",
            fruit: category === "ovoce",
            pastry: category === "pečivo",
            drinks: category === "nápoj"
        }
    )}>
      <tbody>
        <tr>
          <td colSpan="2">{name} 100g</td>
        </tr>
        <tr>
          <td>Calories</td>
          <td>{calories} kcal</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>{protein} g</td>
        </tr>
        <tr>
          <td>Carbohydrates</td>
          <td>{carbohydrates} g</td>
        </tr>
        <tr>
          <td>Fats</td>
          <td>{fats} g</td>
        </tr>
        <tr>
          <td>Fiber</td>
          <td>{fiber} g</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Food;
