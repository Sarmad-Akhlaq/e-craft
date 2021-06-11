const express = require("express");
const mongoose = require("mongoose")
const mongoDB_Password = "TGPSWqfe09q99COJ";

mongoose.connect('mongodb+srv://SarmadAkhlaq:TGPSWqfe09q99COJ@cluster0.xic2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then((con) => {
    console.log("connenct to mongoDB")
})

const app = express();

app.listen(8000, () => {
    console.log("server running on port 8000")
})