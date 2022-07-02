import {collection, getDocs} from "firebase/firestore";
import {db} from "./firestore";
import {useEffect, useState} from "react";

export const usersCollectionRef = collection(db, 'catch-me')

export const getId = async () => {
    const docRef = db.collection("catch-me").doc();
    const docId = docRef.id;
    console.log(docId);
    return docId;
}