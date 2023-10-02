import express from 'express';
import cors from 'cors';
import path from 'path';

var server = express();

function handle(req, res) {
  // Serve the static public folder for GET requests to the root path
  if (req.method === 'GET' && req.url === '/') {
    res.sendFile( 'public/index.html'));
  } else {
    // Handle other requests
    // ...
  }
}

// server.use ( "/" , express.static ( "./static"  ));
server.use( cors());

server.all('*', handle);




const PORT = process.env.PORT || 3001;
server.listen(PORT, (err) => {
    if (err) {
            console.error(err)
          } else {
            console.log(`Running on port ${PORT}`)
          }
          
    
})

export default server