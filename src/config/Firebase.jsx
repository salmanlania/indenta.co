import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';

const firebaseConfig = {
    apiKey: "AIzaSyAAWMndtGH7ulDrlJXou1adzvA8pHHYavk",
    authDomain: "habibi-indenta.firebaseapp.com",
    projectId: "habibi-indenta",
    storageBucket: "habibi-indenta.appspot.com",
    messagingSenderId: "679108183088",
    appId: "1:679108183088:web:a58edafc1a7d9a482c99f5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const generateCustomUID = () => {
    return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
  };

const submit = async (userName, isEmail, phNumber, isMessage) => {
    try {
        // const userCredential = await createUserWithEmailAndPassword(auth, isEmail, "password");
        const customUID = generateCustomUID();
  
        await setDoc(doc(db, "users", customUID), {
            userName: userName,
            isEmail: isEmail,
            phNumber: phNumber,
            isMessage: isMessage,
          });

          Swal.fire({
            title: `Thank You! ${userName}`,
            text: "Thank you for contacting us, we'll reach you as soon as possible",
            icon: 'success',
            confirmButtonText: 'OK',
            customClass : {

            }
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
};

export { submit };
