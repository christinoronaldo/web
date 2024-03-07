const firebase = require('firebase/app');
const firestore = require('firebase/firestore');
const express = require('express');
const app = express();
const port = 3000;

const firebaseConfig = {
  apiKey: "AIzaSyC4WTaRLaw_QsL9RkphbAgWyYgta7rPsDw",
  authDomain: "distance1-306c8.firebaseapp.com",
  databaseURL: "https://distance1-306c8-default-rtdb.firebaseio.com",
  projectId: "distance1-306c8",
  storageBucket: "distance1-306c8.appspot.com",
  messagingSenderId: "793547982904",
  appId: "1:793547982904:web:e01c986d18b4e1f6ce7ecd",
  measurementId: "G-BLLHS69S34"
};

firebase.initializeApp(firebaseConfig);
console.log('Firestore instance:', firestore);

app.use(express.json());

let short = [];

app.get('/', (req, res) => {
  res.sendFile('homepage.html',{ root: __dirname });
});

app.get('/.well-known/assetlinks.json', (req, res) => {
  res.sendFile('.well-known/assetlinks.json',{ root: __dirname });
});

app.get('/1', (req, res) => {
  res.sendFile('search.html',{ root: __dirname });
})

app.get('/api/recive', (req, res) => {
  res.json(short);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

