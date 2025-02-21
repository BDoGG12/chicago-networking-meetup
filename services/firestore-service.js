import { db } from "@/services/firebase.config";
import { collection, addDoc, deleteDoc } from "firebase/firestore";

const addFavoriteEvent = async (title, description, link, imgSrc) => {

    try {
        const docRef = await addDoc(collection(db, 'favoriteEvents'), {
            title: title,
            description: description,
            link: link,
            imgSrc: imgSrc
        });
    } catch (e) {
        console.error('Error adding event doc', e);
    }
};

export {addFavoriteEvent};