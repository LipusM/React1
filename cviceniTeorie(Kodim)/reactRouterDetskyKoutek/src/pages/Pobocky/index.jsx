const c = console.log.bind(document);

import "./style.scss"
import { Outlet } from "react-router-dom";

import CenterPage from "../CenterPage";

const Pobocky = () => {
    return (
        <>
            <CenterPage />
                <Outlet />

        </>
    )
}

export default Pobocky