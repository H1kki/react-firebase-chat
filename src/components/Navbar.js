import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar color={"secondary"} position={"static"}>
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"flex-end"}>
                    {user ? <Button variant={"outlined"} onClick={() => auth.signOut()}>Logout</Button> : <Button variant={"outlined"}>Login</Button>}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;