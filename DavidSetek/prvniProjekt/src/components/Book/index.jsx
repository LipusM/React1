import "./Book.scss";
import OrderButton from "../OrderButton";

const Book = () => {
  return (
    <section>
      <h2 className="bookHeading">Název knihy</h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ab
      enim, animi a aspernatur vero? Eum fuga, dolorem laboriosam eveniet
      consectetur nobis eligendi rem earum voluptatum ab aliquam tempore
      suscipit?
      <OrderButton />
    </section>
  );
};

export default Book;
