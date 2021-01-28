let express = require("express");
let app = express();
let port = 8002;

app.use(express.static("./"));

app.listen(port, function(){
    console.log(`Listening at http://localhost:${port}`);
});