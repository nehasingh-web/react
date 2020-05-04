//import * as firebase from 'firebase';
import firebase from 'firebase';
//  var firebaseConfig = {
//     apiKey: "AIzaSyAFMaPQCk5xSHsGlM7u53vupYvAxcLPN84",
//     authDomain: "react-demo-project-e14b1.firebaseapp.com",
//     databaseURL: "https://react-demo-project-e14b1.firebaseio.com",
//     projectId: "react-demo-project-e14b1",
//     storageBucket: "react-demo-project-e14b1.appspot.com",
//     messagingSenderId: "19811625876",
//     appId: "1:19811625876:web:6bb1cf223f2e2244db3d81",
//     measurementId: "G-GGCT28QDSP"
//   };
var firebaseConfig = {
  apiKey: "AIzaSyAFMaPQCk5xSHsGlM7u53vupYvAxcLPN84",
  authDomain: "react-demo-project-e14b1.firebaseapp.com",
  databaseURL: "https://react-demo-project-e14b1.firebaseio.com",
  projectId: "react-demo-project-e14b1",
  storageBucket: "react-demo-project-e14b1.appspot.com",
  messagingSenderId: "19811625876",
  appId: "1:19811625876:web:6bb1cf223f2e2244db3d81",
  measurementId: "G-GGCT28QDSP"
};
var fire = firebase.initializeApp(firebaseConfig);
  export default fire;
  // Initialize Firebase
  //var fireDb = firebase.initializeApp(firebaseConfig);

  //export default fireDb.database().ref();



