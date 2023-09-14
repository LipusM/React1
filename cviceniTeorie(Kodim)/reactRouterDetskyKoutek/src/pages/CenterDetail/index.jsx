const c = console.log.bind(document)

import React from "react"
import { useParams, Link } from "react-router-dom"

import "./style.scss"
import centers from "../../data/centers"
import { getCenterById } from "../../data/centers"

const CenterDetail = ({address, info}) => {

    const {centerID} = useParams()
    const center = center.find

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