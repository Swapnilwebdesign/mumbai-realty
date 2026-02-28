// ============================================================
// FIREBASE CONFIGURATION — Replace with YOUR Firebase project values
// Steps: https://console.firebase.google.com → Project Settings → Your apps
// ============================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
const WHATSAPP_NUMBER = "919XXXXXXXXX"; // e.g. 919876543210

// ============================================================
// EMAILJS CONFIG — https://www.emailjs.com/
// ============================================================
const EMAILJS_SERVICE_ID  = "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_EMAILJS_PUBLIC_KEY";
