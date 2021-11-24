import React from 'react';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import LoginTemplate from "./Component/Login/template/LoginTemplate";
import App from "./App";
import {Box, Typography} from "@material-ui/core";
import SignupTemplate from "./Component/Signup/Template/SignupTemplate";

const AppRouter: React.FC = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/login" element={<LoginTemplate />} />
                        <Route path='/signup' element={<SignupTemplate />} />
                        <Route path="/" element={<App />} />
                        <Route path="*" element={
                            <Box style={{ padding: "1rem", textAlign: "center"}}>
                                <p>There's nothing here.</p>
                            </Box>
                        }/>
                    </Routes>
                </div>
                <Box mt={5}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                    >
                        {"Copyright ⓒ"}
                        minai621, {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </BrowserRouter>
        </div>
    )
};

export default AppRouter;