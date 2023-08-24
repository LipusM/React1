const c = console.log.bind(document)

import "./style.scss"

const IncreaseOne = (prop) => {

    return (
        <>
            <button onClick={prop.increase}>Zvýšit o jedno</button>
        </>
    )

}

export default IncreaseOne