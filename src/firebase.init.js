
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAlAanuqqwhIJG6RsSVS6GOeY_Gt7UiwU",
  authDomain: "fruits-warehouse-firebase.firebaseapp.com",
  projectId: "fruits-warehouse-firebase",
  storageBucket: "fruits-warehouse-firebase.appspot.com",
  messagingSenderId: "387105810570",
  appId: "1:387105810570:web:0ce113889ea91dbb24e573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
