const Art = require("../models/artModel")
const APIFeatures = require("../utility/commonUtility")

 exports.addArt = async (req,res) => {
    try {
        console.log(req.body)
    var art = await Art.create(req.body)
    console.log(art)
    res.status(200).json({
        status: "success",
        data: {
            art
        }
    })
    } catch (error) {
      console.log(error)
      res.status(404).json({error: error.message})  
    }
}

exports.getArts = async (req,res) => {
    try {
        var {limit = 2} = req.query;
        var query = new APIFeatures(Art, req.query).filter().sort().fieldLimitation().pagination();
        var arts = await query.get();
        

        //finding total number of pages
        var totalPages = Math.ceil(await Art.countDocuments() / limit)
        res.status(200).json({
            status: "success",
            pages: totalPages,
            results: arts.length,
            data: {
               arts
            }
        })   
    } catch (error) {
        console.log(error)
        res.status(404).json({error: error.message})
    }
}