import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMCTgnAo2YfEcIG7-8Mn5Ne8FtbstA5_k",
  authDomain: "fireblogsvue-57958.firebaseapp.com",
  projectId: "fireblogsvue-57958",
  storageBucket: "fireblogsvue-57958.appspot.com",
  messagingSenderId: "416592074736",
  appId: "1:416592074736:web:becf2368b7ca37a5b6ef35",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };

export default firebaseApp.firestore();
