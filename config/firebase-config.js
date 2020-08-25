import firebase from 'firebase';const firebaseConfig = {
    apiKey: "AIzaSyDgTyHExFy41zy55HOFTHCXhEOzv9fKvec",
    authDomain: "next-js-c27dc.firebaseapp.com",
    databaseURL: "https://next-js-c27dc.firebaseio.com",
    projectId: "next-js-c27dc",
    storageBucket: "next-js-c27dc.appspot.com",
    messagingSenderId: "1071220130327",
    appId: "1:1071220130327:web:7d44fa2784ac84c18a9252",
};
try {
    firebase.initializeApp(firebaseConfig);
} catch(err){
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;
