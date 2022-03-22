<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCipHuRpdj0CyGm8Ohzs901EBWSMZuxh1o",
    authDomain: "aghati-f9658.firebaseapp.com",
    databaseURL: "https://aghati-f9658-default-rtdb.firebaseio.com",
    projectId: "aghati-f9658",
    storageBucket: "aghati-f9658.appspot.com",
    messagingSenderId: "966162282030",
    appId: "1:966162282030:web:41551dc49761cc3245d1bf",
    measurementId: "G-XGCK0HWRL8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
