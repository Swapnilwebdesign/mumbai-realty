const firebaseConfig = {
  apiKey: "AIzaSyAfbx0WlUPJ0elur2l09GXZfi0j2jVoGuM",
  authDomain: "mumbai-realty.firebaseapp.com",
  projectId: "mumbai-realty",
  storageBucket: "mumbai-realty.firebasestorage.app",
  messagingSenderId: "806144133947",
  appId: "1:806144133947:web:541f7a32084f815da7c51e"
};
const AGENT_EMAIL = "swapnilgorule93@gmail.com";
const WA_NUMBER = "917219755895";
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();