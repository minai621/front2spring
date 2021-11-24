import React from 'react';
import {Button, Container, Grid, Link, TextField, Typography} from "@material-ui/core";
import {client} from "../../../api-config";

const SignupTemplate: React.FC = () => {
    const onSignupSubmit = (event: any) : void=> {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get("email"));
        const email = data.get("email");
        const username = data.get("username");
        const password = data.get("password");
        client.post('/auth/signup', {
            email,
            username,
            password
        }).then((response) => {
            console.log(response)
            window.location.href = "/login";
        }).catch((response) => {
            console.log(email, username, password);
            console.log(response);
        });
    }
    return(
        <Container component="main" maxWidth="xs" style={{ marginTop: "8%"}}>
            <form noValidate onSubmit={onSignupSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            계정 생성
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            name="email"
                            label="이메일 주소"
                            variant="outlined"
                            autoComplete="email"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            autoFocus
                            fullWidth
                            id="username"
                            name="username"
                            label="사용자 이름"
                            variant="outlined"
                            autoComplete="username"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="password"
                            name="password"
                            type="password"
                            label="비밀번호"
                            variant="outlined"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            회원가입
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            이미 계정이 있습니까? 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
};

export default SignupTemplate;