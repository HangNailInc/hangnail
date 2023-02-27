const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('../frontend/dist/app/'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('../frontend/dist/app/index.html'));
});

app.listen(port, () => {
	console.log(`Hangnail listening on port ${port}`);
});
