const c = console.log.bind(document)

import React from "react"
import { useParams } from "react-router-dom"

import "./style.scss"
import centers from "../../data/centers"
import { getCenterById } from "../../data/centers"

const CenterDetail = (props) => {

    const { id } = useParams()
    const centerInfo = centers.find( oneCenter => oneCenter.id === id )


    return (
        <div>
            <p>
            About: {centerInfo.info}
             </p>
        </div>
    )
}

export default CenterDetail