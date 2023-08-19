import "./style.scss";
import OrderButton from "../OrderButton";

const Book = (props) => {
  const { myImage, myTitle } = props;

  return (
    <section className="oneBook">
      <img className="bookImage" src={myImage} alt="" />
      <h2 className="bookHeading">{myTitle}</h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ab
      enim, animi a aspernatur vero? Eum fuga, dolorem laboriosam eveniet
      consectetur nobis eligendi rem earum voluptatum ab aliquam tempore
      suscipit?
      <OrderButton />
    </section>
  );
};

export default Book;
