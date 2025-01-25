import firebase from "firebase/compat/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyDXH_WNVTJTc8yv8BNaqk9Pj6c2aTXuIlk",
//     authDomain: "nwitter-6b81e.firebaseapp.com",
//     projectId: "nwitter-6b81e",
//     storageBucket: "nwitter-6b81e.firebasestorage.app",
//     messagingSenderId: "652908789643",
//     appId: "1:652908789643:web:a784814e12ba24077f798e"
//   };

import.meta.env.VITE_
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;