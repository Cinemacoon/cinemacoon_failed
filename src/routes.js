import React from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import Years from "./pages/Years"
import SignIn from "./components/authorization/SignIn";
import SignUp from "./components/authorization/SignUp";

export const useRoutes = (isLogin) => {
    
    return (
    <Routes>
         {isLogin ? (
            <React.Fragment>
                <Route path="/years" element={<Years />} />
                <Route path="/*" element={<Navigate replace to="/years" />} />
            </React.Fragment>
        )
         : (
            <React.Fragment>
                <Route path="/register" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/*" element={<Navigate replace to="/login" />} />
            </React.Fragment>
         )}
    </Routes>
    )
}