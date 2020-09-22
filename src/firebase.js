import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAykE-UAg1DyNBi1yeFiG1WHNgzBXvRkyg",
    authDomain: "facebook-clone-53ac9.firebaseapp.com",
    databaseURL: "https://facebook-clone-53ac9.firebaseio.com",
    projectId: "facebook-clone-53ac9",
    storageBucket: "facebook-clone-53ac9.appspot.com",
    messagingSenderId: "429208586035",
    appId: "1:429208586035:web:7cbb84d2387da290322046",
    measurementId: "G-PW4144K7RX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;