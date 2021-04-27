import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzCfVPC54OIOONyiEPYxyzpMdhU7bNFaE",
    authDomain: "instagram-a4f86.firebaseapp.com",
    projectId: "instagram-a4f86",
    storageBucket: "instagram-a4f86.appspot.com",
    messagingSenderId: "1080809451561",
    appId: "1:1080809451561:web:b6db549c102491ada6ec38"
};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

export {firebase, FieldValue};