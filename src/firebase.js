const firebase = require('firebase');


const config = {
    apiKey: "AIzaSyBnUViRpiWzRuPxLXhBolDIzKHzlXF9gaY",
    authDomain: "homework-app-b07ba.firebaseapp.com",
    databaseURL: "https://homework-app-b07ba.firebaseio.com",
    projectId: "homework-app-b07ba",
    storageBucket: "",
    messagingSenderId: "661014196508"
};
const app = firebase.initializeApp(config);

// export const db = app.database();