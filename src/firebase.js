const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyAHKXCu18r-w958T0omFpIfb858-gZwV6U",
    authDomain: "user-app-655d9.firebaseapp.com",
    databaseURL: "https://user-app-655d9.firebaseio.com",
    projectId: "user-app-655d9",
    storageBucket: "user-app-655d9.appspot.com",
    messagingSenderId: "1032095708641"
}

const app = firebase.initializeApp(config)


export const db = app.database()

