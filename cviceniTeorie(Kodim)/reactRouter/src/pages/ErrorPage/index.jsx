const c = console.log.bind(document)

import { useRouteError } from "react-router-dom";
import "./style.scss"

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div id="error-page">
            <div>
                <h2>Já jsem error stránka</h2>
            </div>
        </div>
    )
}

export default ErrorPage