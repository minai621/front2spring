import React from 'react';
import {AppBar, Button, Grid, Toolbar, Typography} from "@material-ui/core";

type AuthNavType = {
    onSignoutSubmit: () => void;
};

const AuthNav: React.FC<AuthNavType> = ({ onSignoutSubmit }) => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Grid justifyContent="space-between" container>
                    <Grid item>
                        <Typography variant="h6">오늘의 할일</Typography>
                    </Grid>
                    <Grid>
                        <Button color="inherit" onClick={onSignoutSubmit}>
                            로그아웃
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default AuthNav;