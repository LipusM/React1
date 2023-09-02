const c = console.log.bind(document)

const UkazkaStavu = () => {

    let name = "Neznámá osoba"
    const handleClick = () => {
        name = "Jarda Jágr"
        c(name)
    }

    return (
        <>
            <h2>Ukázka stavu</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Tlačítko</button>
        </>
    )

}

export default UkazkaStavu