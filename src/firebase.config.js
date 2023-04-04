import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCjZuFWFg2sKCI-dpxyF1OLIZlUkCDYVG0",
    authDomain: "zomato-cfdfd.firebaseapp.com",
    databaseURL: "https://zomato-cfdfd-default-rtdb.firebaseio.com",
    projectId: "zomato-cfdfd",
    storageBucket: "zomato-cfdfd.appspot.com",
    messagingSenderId: "780756577902",
    appId: "1:780756577902:web:6dbc0f5e4e9536099b407f"
  };

  const app=getApps.length>0?getApp():initializeApp(firebaseConfig);
  const firestore=getFirestore(app)
  const storage=getStorage(app)


  export  {app,firestore,storage};