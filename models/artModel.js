const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
    title: String,
    description: String,
    cost: Number,
    resolutionWidth: Number,
    resolutionHeight: Number,
    likes: Number,
    reviews: [
        {
            content: String,
            reviewdBy: String,
            rating: Number,
        }
    ],
    gallery: Array,
    orientation: String, //landscape
    subject: String, //night vision
    formats: Array //jpg,psd,ai
}, {
    timestamps: true
});

const Art = new mongoose.model("Art",artSchema);

module.exports = Art;