import express from 'express';
import { Request } from 'express';
import path from 'path';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAfZZKLW0tKdhiVEitQYCMazbY5SqIH6Nc',
	authDomain: 'hangnail-59264.firebaseapp.com',
	projectId: 'hangnail-59264',
	storageBucket: 'hangnail-59264.appspot.com',
	messagingSenderId: '234934395699',
	appId: '1:234934395699:web:e21c0363e3f32200921446',
	measurementId: 'G-11NBN168Q6',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

// Gets all Pixels from DB
async function getGrid() {
	const pixelsCollection = collection(db, 'pixels');
	const pixelSnapshot = await getDocs(pixelsCollection);
	const pixels = pixelSnapshot.docs.map((doc) => doc.data());
	console.log(pixels);
	return pixels;
}

const app = express();
const port = 3000;

import Tile from '../models/tile';
import Grid from '../models/grid';

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use(express.json());

app.use(express.static('../frontend/dist/app/'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('../frontend/dist/app/index.html'));
});

app.get('/grid', (req, res) => {
	console.log('grid');
	// let k: Grid.Grid = [[{ x: 0, y: 0, color: 'hey' }]];
	res.send(getGrid());
});

app.post('/place-tile', (req: Request<{}, {}, Tile.Tile>, res) => {
	console.log('place tile');
	// console.log(req);
	console.log(req.body);
	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
