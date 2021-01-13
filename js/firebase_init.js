// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebase_core = document.createElement("script")
firebase_core.setAttribute('src','https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
document.body.appendChild(firebase_core);

var firebase_analytics = document.createElement("script")
firebase_analytics.setAttribute('src','https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js');
document.body.appendChild(firebase_analytics);

var firebase_core = document.createElement("script")
firebase_core.setAttribute('src','https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
document.body.appendChild(firebase_core);


var firebaseConfig = {
  apiKey: "AIzaSyAYUXBdJhV0owXqi0qEa1hQtOUiPSdARBE",
  authDomain: "ai4change-hhs.firebaseapp.com",
  projectId: "ai4change-hhs",
  storageBucket: "ai4change-hhs.appspot.com",
  messagingSenderId: "76994119220",
  appId: "1:76994119220:web:8d0574bd673115c0f6ec61",
  measurementId: "G-Z8M6YN66H9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
