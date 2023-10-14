  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAULBIWu5jAdgplVU2CV6JWJtVefNku9Sw",
    authDomain: "fir-bb81b.firebaseapp.com",
    databaseURL: "https://fir-bb81b-default-rtdb.firebaseio.com",
    projectId: "fir-bb81b",
    storageBucket: "fir-bb81b.appspot.com",
    messagingSenderId: "8340453494",
    appId: "1:8340453494:web:0530b31aa965e45b614757",
    measurementId: "G-3DWR59GTN3"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);