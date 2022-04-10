const mongoose = require("mongoose")

const movieInfoSchema = new mongoose.Schema({
    imdbId: {type: String, required: true, unique: true},
    imdbName: String,
    imdbNameUs: String,
    imdbDirector: String,
    imdbGenre: String
})

const MovieInfo = new mongoose.model("MovieInfo", movieInfoSchema);

module.exports = MovieInfo