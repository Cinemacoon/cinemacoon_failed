const fs = require("fs")
const mongoose = require("mongoose");
const MovieInfo = require("./../models/Movieinfo")

mongoose.connect("mongodb://localhost:27017/coonDB");

const data = fs.readFileSync("coonbase/coonbase.json")
const info = JSON.parse(data)
const count = info.table.length

console.log(info.table.length)

for (let a=0; a <count; a++) {
    const movieInfo = new MovieInfo ({
        imdbId: info.table[a].imdbId,
        imdbName: info.table[a].imdbName,
        imdbNameUs: info.table[a].imdbNameUs,
        imdbDirector: info.table[a].imdbDirector,
        imdbGenre: info.table[a].imdbGenre
    })

    MovieInfo.insertMany(movieInfo, function(err){
        if (err) {
            console.log(err)
        } else {
            console.log("Movies added")
        }
    })

}


console.log(MovieInfo)
