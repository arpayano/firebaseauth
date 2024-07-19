
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDwbRFWIJquPH0JAjmV6DjuJzlrUTKsFTo",
    authDomain: "registromantenimientofem.firebaseapp.com",
    projectId: "registromantenimientofem",
    storageBucket: "registromantenimientofem.appspot.com",
    messagingSenderId: "1027472718959",
    appId: "1:1027472718959:web:311a4c03be2d0c43a7e19a",
    measurementId: "G-EPP07Y8JRY"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 // const analytics = getAnalytics(app);
