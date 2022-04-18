import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const app = initializeApp({
    apiKey: "AIzaSyCBYxizn1UCnUBg5ZWtcB34f5khsf9EcRw",
    authDomain: "first-firebase-74ba9.firebaseapp.com",
    projectId: "first-firebase-74ba9",
    storageBucket: "first-firebase-74ba9.appspot.com",
    messagingSenderId: "843460759487",
    appId: "1:843460759487:web:e29e24e16f8b3628a1db0a",
    measurementId: "G-WG1H2E60LQ"
})

const dbase = getFirestore(app)

export {dbase}