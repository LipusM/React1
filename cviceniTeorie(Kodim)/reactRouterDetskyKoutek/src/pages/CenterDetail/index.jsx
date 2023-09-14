const c = console.log.bind(document)

import React from "react"
import { useParams } from "react-router-dom"

import "./style.scss"
import { getCenterById } from "../../data/centers"

const CenterDetail = ({address, info}) => {

    const {centerID} = useParams()
    c(centerID)

    return (
        <div>
            <p>Address: {address} <br />
            About: {info}
            {centerID}
             </p>
        </div>
    )
}

export default CenterDetail