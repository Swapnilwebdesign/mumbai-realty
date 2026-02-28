// ============================================================
// FIREBASE CONFIGURATION — Replace with YOUR Firebase project values
// Steps: https://console.firebase.google.com → Project Settings → Your apps
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyAfbx0WlUPJ0elur2l09GXZfi0j2jVoGuM",
  authDomain: "mumbai-realty.firebaseapp.com",
  projectId: "mumbai-realty",
  storageBucket:"mumbai-realty.firebasestorage.app",
  messagingSenderId: "806144133947",
  appId: "1:806144133947:web:541f7a32084f815da7c51e"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// ============================================================
// AGENT EMAIL — Only this email can login (no public signup)
// ============================================================
const AGENT_EMAIL = "swapnilgorule93@gmail.com";

// ============================================================
// WHATSAPP NUMBER — Replace with real number (no spaces/dashes)
// ============================================================
const WHATSAPP_NUMBER = "917219755895"; // e.g. 919876543210

// ============================================================
// EMAILJS CONFIG — https://www.emailjs.com/
// ============================================================
const EMAILJS_SERVICE_ID  = "service_8oiphmg";
const EMAILJS_TEMPLATE_ID = "template_6vzfflj";
const EMAILJS_PUBLIC_KEY  = "XAUsHXibyZw-0F2GE";
