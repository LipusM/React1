const c = console.log.bind(document)

import "./style.scss"

const DecreaseOne = (prop) => {

    return (
        <>
            <button onClick={prop.decrease}>Snížit o jedno</button>
        </>
    )

}

export default DecreaseOne