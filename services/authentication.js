import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase.config";

const signUpUser = async (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // signed up
            const user = userCredential.user
            console.log(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

const signInUser = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // signed in
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};

export {signUpUser, signInUser};