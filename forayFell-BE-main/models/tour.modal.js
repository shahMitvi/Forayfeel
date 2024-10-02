const mongoose=require('mongoose')
var SchemaTypes = mongoose.Schema.Types;

const Tour = mongoose.model('Tour',new mongoose.Schema({
    tour_name:{type:String},
    place_from:{type:String},
    place_to:{type:String},
    state:{type:String},
    days:{type:Number},
    nights:{type:Number},
    tour_descriptions:{type:String},
    price:{type:SchemaTypes.Decimal128},
    is_featured:{type:SchemaTypes.Boolean},
    cover_image:{type:String}
}))

module.exports = Tour;