import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDotcfJC76MH7DQZJDAYpccRDi8yIv7QE",  
    authDomain: "auth-crown.firebaseapp.com",
    projectId: "auth-crown",
    storageBucket: "auth-crown.appspot.com",
    messagingSenderId: "691668828617",
    appId: "1:691668828617:web:bcdb297fd6f912a201e818"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
