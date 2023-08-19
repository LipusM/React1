import "./Book.scss"
import OrderButton from "../OrderButton"

const Book = () => {

    return (
        <section>
            <h2 className="bookHeading">Název knihy</h2>
            <OrderButton />
        </section>
    )

}

export default Book