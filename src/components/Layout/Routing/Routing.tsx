import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Homepage } from "@/components/Pages/Homepage/Homepage";

export function Routing(): JSX.Element {
    return (
        <Routes>

            <Route index path="/home" element={<Homepage/>} />
            <Route path="" element={<Navigate to={"/home"}/>}/>
        </Routes>
    )
}
