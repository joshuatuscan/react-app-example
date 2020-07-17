import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZdELmpN5St0aGvz2Lo8-QAwXtNlsoUb8",
  authDomain: "fish-market-c0b18.firebaseapp.com",
  databaseURL: "https://fish-market-c0b18.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
