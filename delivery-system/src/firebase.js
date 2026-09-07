import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAT9u1baYvehgoJbv7oUV0xfq-kWi9iCJc",
  authDomain: "climec-express-request.firebaseapp.com",
  projectId: "climec-express-request",
  storageBucket: "climec-express-request.appspot.com",
  messagingSenderId: "642489348360",
  appId: "1:642489348360:web:1f41c73f4c7fbe47ae7cbd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
