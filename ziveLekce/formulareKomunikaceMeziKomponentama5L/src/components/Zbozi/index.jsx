const c = console.log.bind(document)

import "./style.scss"

const Zbozi = ({nazev, koupit}) => {
    return (
        <div className="zbozi">
            <h2>{nazev}</h2>
            <button onClick={ () => koupit(nazev) }>Koupit</button>
        </div>
    )
}

export default Zbozi