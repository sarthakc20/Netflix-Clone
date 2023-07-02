
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvEaP_DxOF5RIF-DOURUBJ7FzB72JtauA",
  authDomain: "netflix-clone-13692.firebaseapp.com",
  projectId: "netflix-clone-13692",
  storageBucket: "netflix-clone-13692.appspot.com",
  messagingSenderId: "816379700899",
  appId: "1:816379700899:web:36335aece9a668f8844116",
};

// // const firebaseApp = firebase.initializeApp(firebaseConfig);
// // const db = firebaseApp.firestore();
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = firebase.auth();

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
