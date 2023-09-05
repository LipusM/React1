const c = console.log.bind(document)

import "./style.scss"

const City = ({name, population, area}) => {

    return (
        <section>
            <p> <b>City:</b> {name} </p>
            <p> <b>Population:</b> {population} </p>
            <p> <b>Area:</b> {area} </p>
        </section>
    )

}

export default City