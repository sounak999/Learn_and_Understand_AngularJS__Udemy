const express = require('express');

const fs = require('fs');

const app = express();

var cors = require('cors');

app.use(cors());



app.get('/api', (req, res) => {

	fs.readFile('data.json', 'utf8', (err, data) => {

		if (err) {

			console.error(err);

			res.status(500).send('Internal Server Error');

			return;

		}



		try {

			const jsonData = JSON.parse(data);

			res.json(jsonData);

		} catch (e) {

			console.error(e);

			res.status(500).send('Internal Server Error');

		}

	});

});



app.listen(3000, () => {

	console.log('Server started on port 3000');

});