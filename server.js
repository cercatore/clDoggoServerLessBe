import express from 'express';
import cors from 'cors';

var server = express();

// server.use ( "/" , express.static ( __dirname + "/" + "dns") );
server.use( cors());



const PORT = process.env.PORT || 3001;
server.listen(PORT, (err) => {
    if (err) {
            console.error(err)
          } else {
            console.log(`Running on port ${PORT}`)
          }
          
    
})

export default server