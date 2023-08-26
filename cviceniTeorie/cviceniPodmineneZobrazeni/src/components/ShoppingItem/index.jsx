const c = console.log.bind(document)

import "./style.scss"

const ShoppingList = (props) => {

    const {item, amount, unit, bought, id} = props

    return (
        <div key={id}>
            <p><b>Položka:</b> {bought ? "✔" : "x"} {item} {amount} {unit}</p>
        </div>
    )

}

export default ShoppingList