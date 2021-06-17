require("dotenv").config();
const app = require("./app")
const mongoose = require("mongoose")
const Art = require("./models/artModel")

const DB = process.env.MONGO_STRING.replace("<PASSWORD>", process.env.MONGODB_PASSWORD)
mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true}).then((con) => {
    console.log("connenct to mongoDB")
})

app.listen(process.env.PORT, () => {
    console.log("server running on port 8000")
})