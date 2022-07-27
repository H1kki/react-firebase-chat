import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}} justifyContent={"center"} alignItems={"center"}>
                <Grid container alignItems={"center"} flexDirection={"column"}>
                    <div className="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;