// saving new items 

import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore"; //its a function coming from firestore  to set a new value even if it's not there it will create it if it is already there it will update it 
import { firestore } from "../firebase.config"

export const saveItem=async(data)=>{
    await setDoc(doc(firestore,'foodItems',`${Date.now()}`,),data,{merge:true}
    );
};
export const getAllFoodItems=async(data)=>{
    const items =await getDocs( //get all food items from the firestore database
        query(collection(firestore,"foodItems"),orderBy("id","desc"))
    );
    return items.docs.map((doc)=>doc.data())
}