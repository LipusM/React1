const c = console.log.bind(document)

import "./style.scss"

const AllDeleteButton = (prop) => {

    return (
        <button className="main-delete-button" onClick={prop.deleteMovies}>Vymaž vše</button>
    )

}

export default AllDeleteButton