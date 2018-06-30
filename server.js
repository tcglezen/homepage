// const is final, require is node specific, similar as "import as http" from python
const http = require('http'); 
const path = require('path'); 
const express = require('express'); 
const app = express(); 


app.use(express.static(__dirname));

//express.static('C:/homepage');


//https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_http_createserver_requestlistener
app.get('/', (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('This is the first line\n');
	res.end('Hello there\n');
	}
);



//This will be the 404 error 
//Learn how to redirect this to a spare page 
//
app.get('/*', (req, res) => {
	res.writeHead(404, {'Content-Type': 'text/plain'});
	res.write('404 Error. Page not found.\n');
	res.end('Please go back to the homepage');
    }
);


const port = 9001; 

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})

