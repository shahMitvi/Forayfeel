const { authJwt, upload } = require("../middlewares");
const controller = require("../controllers/bookings.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/booking/create",
    [authJwt.verifyToken],
    controller.makeBooking
  );
  app.get(
    "/api/booking/all",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getBookings
  );
  app.get(
    "/api/booking/:id",
    [authJwt.verifyToken],
    controller.getBookingById
  );
  app.get(
    "/api/booking_by_user/:id",
    [authJwt.verifyToken],
    controller.getBookingsByUser
  );
  app.patch(
    "/api/booking/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateBookings
  )
  app.delete(
    "/api/booking/:id",
    [authJwt.verifyToken],
    controller.cancelBooking
  )
};
