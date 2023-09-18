const express =  require('express');
const cors = require('cors');

server = express();

server.use ( "/" , express.static ( __dirname + "/" + "dns") );
server.use( cors());



const PORT = process.env.PORT || 3001;
server.listen(PORT, (err) => {
    if (err) {
            console.error(err)
          } else {
            console.log(`Running on port ${PORT}`)
          }
          
    
})

module.exports = server;