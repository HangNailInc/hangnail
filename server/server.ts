import express from 'express';
import { Request } from 'express';
import path from 'path';
import Tile from '../models/tile';
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	getDocs,
	Timestamp,
	doc,
	query,
	where,
	getDoc,
	DocumentReference,
	DocumentData,
	addDoc,
	updateDoc,
} from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyAfZZKLW0tKdhiVEitQYCMazbY5SqIH6Nc',
	authDomain: 'hangnail-59264.firebaseapp.com',
	projectId: 'hangnail-59264',
	storageBucket: 'hangnail-59264.appspot.com',
	messagingSenderId: '234934395699',
	appId: '1:234934395699:web:e21c0363e3f32200921446',
	measurementId: 'G-11NBN168Q6',
};

// Database Logic
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

// Gets all Pixels from DB
async function getTiles() {
	const pixelsCollection = collection(db, 'pixels');
	const pixelSnapshot = await getDocs(pixelsCollection);
	const pixels: Tile[] = pixelSnapshot.docs.map((doc) => {
		const data = doc.data();
		return new Tile(
			doc.id,
			data.x,
			data.y,
			data.color,
			(data.modified as Timestamp).toDate()
		);
	});
	console.log(pixels);
	return pixels;
}

// async function getTile(x: number, y: number) {
// 	const tileQuery = query(
// 		collection(db, 'pixels'),
// 		where('x', '==', x),
// 		where('y', '==', y)
// 	);
// 	const snapshot = await getDocs(tileQuery);

// 	if (snapshot.empty) {
// 		return null;
// 	} else {
// 		return snapshot.docs[0];
// 	}
// }

async function postTile(tile: Tile) {
	let exists: boolean = false;
	let tileRef;

	if (tile.id != null) {
		tileRef = doc(db, 'pixels', tile.id);
		exists = (await getDoc(tileRef)).exists();
	}

	if (exists) {
		await updateDoc(tileRef, {
			color: tile.color,
			modified: Timestamp.fromDate(tile.modified),
		});
	} else {
		console.log('Type of tile.modified: ' + typeof tile.modified);

		tileRef = await addDoc(collection(db, 'pixels'), {
			x: tile.x,
			y: tile.y,
			color: tile.color,
			modified: Timestamp.fromDate(tile.modified),
		});
	}

	return new Tile(tileRef.id, tile.x, tile.y, tile.color, tile.modified);
}

// Express API
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('../frontend/dist/app/'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('../frontend/dist/app/index.html'));
});

// GET all tiles
app.get('/tiles', async (req, res) => {
	const tiles = await getTiles();
	res.send(tiles);
});

// POST a new/updated tile
app.post('/tiles', async (req, res) => {
	const tile: Tile = req.body;
	tile.modified = new Date(tile.modified);
	const resTile = await postTile(tile);
	res.status(200).send(resTile);
});

app.listen(port, () => {
	console.log(`Hangnail listening on port ${port}`);
});
