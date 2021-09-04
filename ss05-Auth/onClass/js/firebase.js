const firebaseConfig = {
  apiKey: "AIzaSyCJErQzwph09c5qc4aWDmCl-6f8FID8uDc",
  authDomain: "ci65-chatting.firebaseapp.com",
  projectId: "ci65-chatting",
  storageBucket: "ci65-chatting.appspot.com",
  messagingSenderId: "914462577049",
  appId: "1:914462577049:web:65a47a957077df89768308",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

