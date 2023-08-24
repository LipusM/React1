const c = console.log.bind(document)

import "./style.scss"

const ResetButton = (prop) => {

    return (
        <>
            <button onClick={prop.resetValue}>Resetovat hodnotu</button>
        </>
    )

}

export default ResetButton