var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) { //creates server 
  var q = url.parse(req.url, true); //makes variable q hold elements of the "url"
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data)//used path name to find file in sever 
	  {
    if (err) {
      res.writeHead(400, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
	
    	res.writeHead(200, {'Content-Type': 'text/html', 
			    'Connection': 'keep-alive'});
	res.write(data);
    	return res.end();
  });
}).listen(8080);

