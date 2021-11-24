import React from 'react';
import {Button, Grid, Link, TextField} from "@material-ui/core";

type LoginFormType = {
    onLoginSubmit: (event: any) => void;
}

const LoginForm: React.FC<LoginFormType> = ({ onLoginSubmit }) => {
    return(
        <form noValidate onSubmit={onLoginSubmit}>
            {""}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="이메일 주소"
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        type="password"
                        label="비밀번호"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        로그인
                    </Button>
                </Grid>

                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/signup" variant="body2">
                            계정이 없습니까? 여기서 가입하세요.
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
};

export default LoginForm;