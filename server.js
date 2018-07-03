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
app.get('/', (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	//res.write('This is the first line\n');
	res.end();
	}
);

//This will be the 404 error 
//Learn how to redirect this to a spare page 
//
app.get('/*', (req, res) => {
	
	fs.readFile('404page.html', function (err, data) { 
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.write(data); 
		return res.end(); 
	    })
		
		
		
	//res.writeHead(404, {'Content-Type': 'text/html'});
	//res.sendFile('./404page.html');
    });

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})

