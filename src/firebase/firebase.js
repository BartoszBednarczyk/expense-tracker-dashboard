import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDsoXGRs1LOmwPPIs0Mo6chrqtlEQ5nfLA",
    authDomain: "expense-tracker-dashboard.firebaseapp.com",
    projectId: "expense-tracker-dashboard",
    storageBucket: "expense-tracker-dashboard.appspot.com",
    messagingSenderId: "507719847400",
    appId: "1:507719847400:web:7ccb607d57afd68589285d"
  }

firebase.initializeApp(firebaseConfig);
export default firebase
export const database = firebase.firestore()
export const usersCollection = database.collection('users')