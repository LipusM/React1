const c = console.log.bind(document)

import "./style.scss"

const Clock = ({hour, minute, format}) => {

    let time

    if(format === "12h" && hour > 12){
        time = Math.abs(hour - 12)
    } else {
        time = hour
    }

    return (
        <>
        {format === "24h" ? <p>{hour}:{minute}</p> : <p> {time}:{minute} {hour >= 12 ? "PM" : "AM"} </p>}
        
        </>
    )

}

export default Clock