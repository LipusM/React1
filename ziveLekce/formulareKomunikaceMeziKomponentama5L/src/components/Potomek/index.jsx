const c = console.log.bind(document)

import "./style.scss"

const Potomek = ({jmeno, vek, zmenaVeku}) => {
    return (
        <div className="potomek">
            <h2>Potomek {jmeno} má {vek}</h2>
            <button onClick={ () => zmenaVeku(1) }>Mám narozeniny, je mi +1</button>
            
            <button onClick={ () => zmenaVeku(3) }>Mám narozeniny, je mi +3</button>
        </div>
    )
}

export default Potomek