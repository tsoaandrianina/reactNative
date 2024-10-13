
// import { initializeApp } from 'firebase/app';
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore'
// import firebase from "firebase";
// import"@firebase/firestore";

// const FirebaseConfig = {
//     apiKey: "AIzaSyBWAhZbya5wUi14fv1UK2hSM6QQuG7nKA0",
//     authDomain: "testetalik.firebaseapp.com",
//     projectId: "testetalik",
//     storageBucket: "testetalik.appspot.com",
//     messagingSenderId: "765385190652",
//     appId: "1:765385190652:web:2c3ea1b76826738ee17b79"
// }

// class Fire {
//     constructor (callback) {
//         this.init(callback)
//     }

//     init(callback){
//         if (!firebase.apps.length) {
//             firebase.initializeApp(FirebaseConfig)
//         }

//         firebase.auth().onAuthStateChanged(user => {
//             if (user) {
//                 callback(null, user)

//             } else {
//                 firebase
//                 .auth()
//                 .signInAnonymously()
//                 .catch(error => {
//                     callback(error)
//                 });

//             }
//         });
//     }
// }

// export default Fire;

// Import des modules nécessaires
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// Configuration Firebase
const FirebaseConfig = {
  apiKey: "AIzaSyBWAhZbya5wUi14fv1UK2hSM6QQuG7nKA0",
  authDomain: "testetalik.firebaseapp.com",
  projectId: "testetalik",
  storageBucket: "testetalik.appspot.com",
  messagingSenderId: "765385190652",
  appId: "1:765385190652:web:2c3ea1b76826738ee17b79"
};

// Initialisation de l'application Firebase
const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore, si vous en avez besoin

// Classe Fire modifiée
class Fire {
  constructor(callback) {
    this.init(callback);
  }

  init(callback) {
    // Vérifie l'état de l'utilisateur
    onAuthStateChanged(auth, (user) => {
      if (user) {
        callback(null, user);
      } else {
        // Connexion anonyme si aucun utilisateur connecté
        signInAnonymously(auth)
          .then(() => console.log("Connected anonymously"))
          .catch((error) => callback(error));
      }
    });
  }
}

export default Fire;