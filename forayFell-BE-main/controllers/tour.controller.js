const db = require("../models");
const Tour=db.tour;

exports.createTour = (req,res)=>{
    const tour = new Tour({
        tour_name:req.body.tour_name,
        place_from:req.body.place_from,
        place_to:req.body.place_to,
        state:req.body.state,
        days:req.body.days,
        nights:req.body.nights,
        tour_descriptions:req.body.tour_descriptions,
        price:req.body.price,
        is_featured:req.body.is_featured,
        cover_image:req.file.path
      })
    
      tour.save((err,tour)=>{
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "Tour was registered successfully!" ,tour:tour});
    })
}   

exports.getTours=(req,res)=>{
    Tour.find({},(err,tours)=>{
        if(err){
            res.status(500).send({ message: err });
            return;
        }

        res.status(200).send(tours);
    })
}
exports.getTourById=(req,res)=>{
    Tour.findById(req.params.id,(err,tour)=>{
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(tour);
    })
}
exports.getFeaturedTours=(req,res)=>{
    console.warn("FEW")
    Tour.find({is_featured:true},(err,tours)=>{
        console.log("FEW")
        if(err){
            console.log("www",err)
            res.status(500).send({ message: err });
            return;
        }

        res.status(200).send(tours);
    })
}
exports.updateTour=(req,res)=>{
    Tour.findByIdAndUpdate(req.params.id,{
        tour_name:req.body.tour_name,
        place_from:req.body.place_from,
        place_to:req.body.place_to,
        places_to_be:req.body.places_to_be,
        days:req.body.days,
        state:req.body.state,
        nights:req.body.nights,
        tour_descriptions:req.body.tour_descriptions,
        price:req.body.price,
        is_featured:req.body.is_featured,
        cover_image:req.file ? req.file.path : req.body.cover_image
      },{new:true},(err,tour)=>{
        if(!tour) {
            return res.status(404).send({
            message: "tour not found with id " + req.params.id
          });
        }
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send({ message: "Tour was updated successfully!" ,tour:tour});
      })
}
exports.deleteTour=(req,res)=>{
    Tour.findByIdAndRemove(req.params.id,(err,tour)=>{
        if(!tour) {
            return res.status(404).send({
            message: "tour not found with id " + req.params.id
          });
        }
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send({ message: "Tour was deleted successfully!" ,tour:tour});
    })
}

