const c = console.log.bind(document)

import React from "react"
import { useParams } from "react-router-dom"

import "./style.scss"
import { getCenterById } from "../../data/centers"

const CenterDetail = ({address, info}) => {

    const {centerID} = useParams()

    return (
        <div>
            <p>Address: {address} <br />
            About: {info}
             </p>
        </div>
    )
}

export default CenterDetail