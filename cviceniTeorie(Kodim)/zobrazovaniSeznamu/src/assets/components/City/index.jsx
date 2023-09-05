const c = console.log.bind(document)

import "./style.scss"

const City = ({name, population, area, district, img}) => {

    return (
        <section>
            <p> <b>City:</b> {name} </p>
            <p> <b>Population:</b> {population} </p>
            <p> <b>Area:</b> {area} </p>
            <p> <b>Disctrict:</b> {district} </p>
            <img src={img} />
        </section>
    )

}

export default City