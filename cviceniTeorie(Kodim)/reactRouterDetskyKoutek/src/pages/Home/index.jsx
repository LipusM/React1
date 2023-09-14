const c = console.log.bind(document)

import "./style.scss"

const Home = () => {
    return(
        <main id="homePage">
            <h2>Dětský koutek</h2>
            <p>Vítejte v našem dětském koutku! Jsme místo plné zábavy a dobrodružství pro všechny děti do 6ti let. 
                Najdete u nás hry, aktivity, kvízy a mnoho dalšího, co zabaví vaše ratolesti a pomůže jim učit se nové věci. 
                Vyberte si některou z našich poboček a začněte objevovat svět plný překvapení!
            </p>
        </main>
    )
}

export default Home