const c = console.log.bind(document)

import classnames from "classnames"
import "./style.scss"

const Bulb = ({on}) => {

    return (
        <div className={classnames( "bulb", {
            "bulb--on": on,
        } )}>

        </div>
    )

}

export default Bulb