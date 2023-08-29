const c = console.log.bind(document);

import classNames from "classnames";
import "./style.scss";

const Product = ({name, description, price, isFavorite}) => {

/*   return (
    <div className="product">
      <h2 className={isFavorite ? "product__name product--favorite" : "product__name"}>{name}</h2>
      <p className="product__description">{description}</p>
      <p className="product__price">{price} Kč</p>
    </div>
  ); */

  return (
    <div className={classNames("product", {"product--favorite": isFavorite})}>
      {isFavorite ? <h2>{name} ⭐</h2> : <h2>{name}</h2>}
      <p className="product__description">{description}</p>
      <p className="product__price">{price} Kč</p>
    </div>
  );

};

export default Product;
