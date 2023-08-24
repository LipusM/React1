const c = console.log.bind(document)

import "./style.scss"

const DecreaseButton = (prop) => {

    return (
        <>
            <button onClick={prop.decreaseOne}>Snížit o 1</button>
        </>
    )

}

export default DecreaseButton