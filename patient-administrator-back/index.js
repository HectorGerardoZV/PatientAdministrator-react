const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
const router = require("./router/router");
const bodyParser = require("body-parser");

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/patientAdministrator",{
    useNewUrlParser: true
})
//Adding bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//Adding cors
app.use(cors());

//Adding router
app.use("/",router);

app.listen(port,()=>{
    console.log("Server runing in port: "+port);
});
