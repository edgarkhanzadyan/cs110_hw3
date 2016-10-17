'use strict'

let http = require('http');
const port = 8000;
const server = http.createServer((req, res) => {
	switch (req.url) {
		case '/Whazzzup':
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("Hey!!!");
			break;
		case '/HowAreYou':
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("inch ka chka???");
			break;
		case '/WhereAreYou':
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("Ara ures???");
			break;
		case '/SoWhat':
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("Ba heto???");
			break;
		case '/GoodBye':
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("Hajox!");
			break;
		default: res.end('ERRRRRROOOOOORRRRR');
		}
})
server.listen(port, () =>
				console.log(`Server started on port:, check localhost:8000`)
);
