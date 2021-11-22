import React from 'react';
import {Grid, Typography} from "@material-ui/core";

const LoginTypo: React.FC = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
            </Grid>
        </Grid>
    )
};

export default LoginTypo;