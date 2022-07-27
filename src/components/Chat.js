import React, {useContext, useState} from 'react';
import {Avatar, Button, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";
import Loader from "./Loader";

const Chat = () => {
    const [value, setValue] = useState('')
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'))
    console.log(messages)
    const sendMessage = async () => {
        await firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if(loading) return <Loader/>

    return (
        <Grid container style={{height: window.innerHeight - 50}} justifyContent={'center'}>
            <div style={{width: '80%', height: '68vh', border: '1px solid gray', overflowY: 'auto', margin: '5px 0'}}>
                {messages.map(message => {
                    return <div key={message.createdAt} style={{
                        marginLeft: user.uid === message.uid ? 'auto' : '10px',
                        width: "fit-content",
                        padding: '10px'
                    }}>
                        <Grid container>
                            {user.uid === message.uid ?
                            <>
                                <div>{message.displayName}</div>
                                <Avatar src={message.photoURL}/>
                            </>
                            :
                            <>
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </>
                            }
                        </Grid>
                        <div>
                            {message.text}
                        </div>
                    </div>
                })}
            </div>
            <Grid container direction={"column"} alignItems={"flex-end"} style={{width: '80%'}}>
                <TextField variant={"outlined"} fullWidth maxRows={2} value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button variant={"outlined"} onClick={sendMessage}>Send</Button>
            </Grid>
        </Grid>
    );
};

export default Chat;