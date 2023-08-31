const c = console.log.bind(document)

import "./style.scss"

const Udalost = () => {

    const handleClick = () => {
        alert("Ahoj světe!")
    }

    return (
        <>
        <h2>Udalost</h2>

        <button onClick={handleClick}>Tlačítko</button>
        <button onClick={ () => {c("ha")} }>Console</button>
        </>
    )

}

export default Udalost