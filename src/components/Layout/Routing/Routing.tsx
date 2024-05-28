import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Homepage } from "@/components/Pages/Homepage/Homepage";
import { LoginForm } from "@/components/Pages/Forms/LoginForm/LoginForm";
import { RegisterForm } from "@/components/Pages/Forms/RegisterForm/RegisterForm";

export function Routing(): JSX.Element {
    return (
        <Routes>

            <Route index path="/home" element={<Homepage/>} />
            <Route path="" element={<Navigate to={"/home"}/>}/>
            <Route path="/home/login" element={<LoginForm/>}/>
            <Route path="/home/register" element={<RegisterForm/>}/>

        </Routes>
    )
}
