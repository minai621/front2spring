import React from 'react';
import {Container} from "@material-ui/core";
import LoginTypo from "../atom/LoginTypo";
import LoginForm from "../molecule/LoginForm";
import {client} from "../../../api-config";

const LoginContainer: React.FC = () => {
    const onLoginSubmit = (event: any): void => {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        console.log(email);
        client.post('/auth/signin', {
            email, password
        }).then((response) => {
            const { token } = response.data;
                if(token) {
                    console.log("redirect home");
                    localStorage.setItem("ACCESS_TOKEN", token);
                    window.location.href ="/";
                }
        });
    }

    return(
        <Container component="main" maxWidth="xs" style={{ marginTop: "8%"}}>
            <LoginTypo />
            <LoginForm onLoginSubmit={onLoginSubmit}/>
        </Container>
    )
};

export default LoginContainer;