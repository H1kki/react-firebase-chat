import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";
import firebase from 'firebase'



const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      const {user} = await auth.signInWithPopup(provider)
      console.log(provider)
    }
    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}} justifyContent={"center"} alignItems={"center"}>
                <Grid container alignItems={"center"} flexDirection={"column"} style={{width: 400, border: '2px solid teal', background: "lightgray"}}>
                    <Box p={5}>
                        <Button variant={"outlined"} onClick={login}>Enter with google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;