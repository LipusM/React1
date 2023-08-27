const c = console.log.bind(document);

import "./style.scss";

const Product = ({name, description, price, isFavorite}) => {

  return (
    <div className="product">
      <h2 className="product__name">{name} ⭐</h2>
      <p className="product__description">{description}</p>
      <p className="product__price">{price} Kč</p>
    </div>
  );

};

export default Product;
