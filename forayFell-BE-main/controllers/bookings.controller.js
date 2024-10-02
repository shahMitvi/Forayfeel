const db = require("../models");
const Bookings=db.bookings;

exports.makeBooking = (req,res)=>{
    const booking = new Bookings({
        tour: req.body.tour_id,
        user: req.userId,
        From_date:new Date(req.body.From_date),
        to_date: new Date(req.body.to_date),
        persons: req.body.persons,
        amount:req.body.amount,
        payment_Method: req.body.payment_method,
        is_payment_completed:req.body.is_payment_completed,
      })
    
      booking.save((err,booking)=>{
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "Booking completed successfully!" ,details:booking});
    })
}   

exports.getBookings=(req,res)=>{
    Bookings.find().populate("tour").populate("user","-roles -password").exec((err,bookings)=>{
        if(err){
            res.status(500).send({ message: err });
            return;
        }

        res.status(200).send(bookings);
    })
}
exports.getBookingById=(req,res)=>{
    Bookings.findById(req.params.id,(err,booking)=>{
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(booking);
    })
}
exports.getBookingsByUser=(req,res)=>{
    Bookings.find({user:req.params.id},(err,bookings)=>{
        if(err){
            res.status(500).send({ message: err });
            return;
        }

        res.status(200).send(bookings);
    })
}
exports.updateBookings=(req,res)=>{
    Bookings.findByIdAndUpdate(req.params.id,{
        tour: req.body.tour_id,
        user: req.userId,
        From_date:new Date(req.body.From_date),
        to_date: new Date(req.body.to_date),
        persons: req.body.persons,
        amount:req.body.amount,
        payment_Method: req.body.payment_method,
        is_payment_completed:req.body.is_payment_completed,
      },{new:true},(err,booking)=>{
        if(!booking) {
            return res.status(404).send({
            message: "Booking not found with id " + req.params.id
          });
        }
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send({ message: "Booking was updated successfully!" ,booking:booking});
      })
}
exports.cancelBooking=(req,res)=>{
    Bookings.findByIdAndRemove(req.params.id,(err,booking)=>{
        if(!booking) {
            return res.status(404).send({
            message: "booking not found with id " + req.params.id
          });
        }
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send({ message: "booking was deleted successfully!" ,booking:booking});
    })
}

