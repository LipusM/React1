const c = console.log.bind(document)

import "./style.scss"

const IncreaseButton = (prop) => {

    return (
        <>
            <button onClick={prop.increaseOne}>Zvýšit o 1</button>
        </>
    )

}

export default IncreaseButton