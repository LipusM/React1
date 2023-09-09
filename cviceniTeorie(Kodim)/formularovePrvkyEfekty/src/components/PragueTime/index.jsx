const c = console.log.bind(document);

import { useState, useEffect } from "react";
import "./style.scss";

const PragueTime = () => {

    const [datetime, setDatetime] = useState("")

    useEffect(() => {
        
        fetch("https://worldtimeapi.org/api/timezone/Europe/Prague")
        .then(response => response.json())
        .then(data => setDatetime(data.datetime))

    }, [])

    return (
        <>
            <h1>Pražský čas</h1>
            <div>
                Dnešní datum: {datetime}
            </div>
        </>
    )

}

export default PragueTime