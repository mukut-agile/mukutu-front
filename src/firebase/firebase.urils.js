import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCtnEPCuG-SQv-B1YeqN04qiTwi-PoOIxk",
  authDomain: "mukut-db.firebaseapp.com",
  databaseURL: "https://mukut-db.firebaseio.com",
  projectId: "mukut-db",
  storageBucket: "mukut-db.appspot.com",
  messagingSenderId: "120444934336",
  appId: "1:120444934336:web:454db30187635016207525",
  measurementId: "G-PN087W41FT"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }) //Googleログインをするたび毎回アカウントを選択してもらう。
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;