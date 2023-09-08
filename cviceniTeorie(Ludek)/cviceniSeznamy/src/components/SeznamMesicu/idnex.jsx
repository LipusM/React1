const c = console.log.bind(document)

import "./style.scss"

//Kopirování pole mesice
const mesice = ['leden', 'únor', 'březen',  'duben',  'květen',  'červen',  'červenec',  'srpen',  'září',  'říjen',  'listopad',  'prosinec']

const SeznamMesicu = () => {
    return (
        <>
        <h1>Seznam měsíců</h1>
        <ul>
            {mesice.map(mesic => <li>{mesic}</li>)}
        </ul>

        </>
    )
}

export default SeznamMesicu