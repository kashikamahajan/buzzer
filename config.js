import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCB4Sm7s8JZihi5fkhMXIEnE8xTrVAprpA',
  authDomain: 'wirless-buzzer.firebaseapp.com',
  databaseURL: 'https://wirless-buzzer.firebaseio.com',
  projectId: 'wirless-buzzer',
  storageBucket: 'wirless-buzzer.appspot.com',
  messagingSenderId: '665433405632',
  appId: '1:665433405632:web:446f3627861b7e334bd525',
  measurementId: 'G-96SRDXC75M',
};

// Initialize Firebase
if (!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
