const c = console.log.bind(document)

import classnames from "classnames"
import "./style.scss"

const Inbox = ({account, messages}) => {

    return (
        <div className="emailSection">
            <div className="accountName">{account}</div>
            <div className="accountMessages">
                {messages > 0 ? 
                (<div className="unread">Nepřečtených zpráv: {messages}</div>) 
                : 
                (<div className="no-unread">Žádné nepřečtené zprávy</div>)
                }
            </div>
            <br />
        </div>
    )

}

export default Inbox