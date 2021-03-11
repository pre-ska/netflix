import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCX289pXWpfUDUqIF77AA5SI0k884v_Di0",
  authDomain: "netflix-f2718.firebaseapp.com",
  projectId: "netflix-f2718",
  storageBucket: "netflix-f2718.appspot.com",
  messagingSenderId: "470507117604",
  appId: "1:470507117604:web:41ab809bae935ac13e0cb1"
};

const firebase = Firebase.initializeApp(config);

export { firebase };
