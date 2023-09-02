const c = console.log.bind(document)

import "./style.scss"

const Udalost = () => {

    const handleClick = () => {
         alert("Ty zvrhlíku!")
    }

    return (
        <>
            <h2>Událost</h2>
            <button onClick={ handleClick }>Alert</button>
            <button onMouseEnter={ () => {c("Pitomost!")} }>Console</button>
            
        </>
    )

}

export default Udalost