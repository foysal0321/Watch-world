
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

// const app = initializeApp(firebaseConfig);

// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiEE5ZljxN6mZta93bC8XiG4OoCeMtHm0",
  authDomain: "watch-world-f53ee.firebaseapp.com",
  projectId: "watch-world-f53ee",
  storageBucket: "watch-world-f53ee.appspot.com",
  messagingSenderId: "669644563979",
  appId: "1:669644563979:web:075aa97efd9eb187eb890e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;