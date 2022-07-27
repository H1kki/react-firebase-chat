import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyBVIf5tHqfszQVeNiX8EDql_9MbNEcQ10I",
    authDomain: "chat-react-e67c1.firebaseapp.com",
    projectId: "chat-react-e67c1",
    storageBucket: "chat-react-e67c1.appspot.com",
    messagingSenderId: "918682970177",
    appId: "1:918682970177:web:47fa74bc833a4cfc1a7ec0",
    measurementId: "G-L6GPX3180W"
});

const firestore = firebase.firestore();
const auth = firebase.auth();


export const Context = createContext(null)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase, auth, firestore
    }}>
        <App />
    </Context.Provider>
);

