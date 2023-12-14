import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
	apiKey: "AIzaSyBAs32actBVDzme6V8nIwYvPAEPm_xXTAA",
	authDomain: "ven-s-workshop.firebaseapp.com",
	projectId: "ven-s-workshop",
	storageBucket: "ven-s-workshop.appspot.com",
	messagingSenderId: "318990754781",
	appId: "1:318990754781:web:52ef76ad04c41a6de1cc34",
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}