//import app
const app = require("./app");

//specify port
const port = 5000;

//start server
app.listen( port, () =>{
    console.log(`Running on port ${port}`);
})

