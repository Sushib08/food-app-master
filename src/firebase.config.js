import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnhT2OKbTi1g3bf7v_pqJ3wb6iNGenLto",
  authDomain: "food-delivery-app-dc13b.firebaseapp.com",
  databaseURL:
    "https://food-delivery-app-dc13b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-delivery-app-dc13b",
  storageBucket: "food-delivery-app-dc13b.appspot.com",
  messagingSenderId: "20445403673",
  appId: "1:20445403673:web:faa931dda6c34a08746888",
  measurementId: "G-TTN25G700F",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
