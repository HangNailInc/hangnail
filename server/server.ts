import express from 'express';
import { Request } from 'express';
import path from 'path';

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
	let k: Grid.Grid = [[{ x: 0, y: 0, color: 'hey' }]];
	res.send(k);
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
