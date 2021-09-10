var firebaseConfig = {
  apiKey: "AIzaSyBsGzEcB8pKcEpjlBTKSXxWan4w63zcI3I",
  authDomain: "store-2-5abc5.firebaseapp.com",
  projectId: "store-2-5abc5",
  storageBucket: "store-2-5abc5.appspot.com",
  messagingSenderId: "417672048503",
  appId: "1:417672048503:web:5505f84e0d272ecd1b7b72"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

