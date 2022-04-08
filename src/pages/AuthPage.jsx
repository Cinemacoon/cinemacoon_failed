import React from "react"
import { Routes, Route } from "react-router-dom"
import SignUp from "../components/authorization/SignUp"
import SignIn from "../components/authorization/SignIn"

const AuthPage = () => {
    return (
            <Routes>
                <React.Fragment>
                    <Route path="/login" element={<SignIn />}/>
                    <Route path="/register" element={<SignUp />}/>
                </React.Fragment>
            </Routes>

    )
}
export default AuthPage