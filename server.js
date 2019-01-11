// const is final, require is node specific, similar as "import as http" from python
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9001;
const fs = require('fs');

app.use(express.static(__dirname));

//express.static('C:/homepage');

//https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_http_createserver_requestlistener
//This is the standard page.
app.get('/', (req, res) => {

	res.set('Content-Type', 'text/html');
	res.status(200).end();
	}
);

//404 page.
app.get('/*', (req, res) => {

	res.set('Content-Type', 'text/html');
	res.status(404).sendFile(path.join(__dirname, '404page.html'));
});

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
