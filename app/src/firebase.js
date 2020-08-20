import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()

