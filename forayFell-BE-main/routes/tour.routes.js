const { authJwt, upload } = require("../middlewares");
const controller = require("../controllers/tour.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/tour/create",
    [authJwt.verifyToken, authJwt.isAdmin, upload.single("cover_image")],
    controller.createTour
  );
  app.get(
    "/api/tour/all",
    controller.getTours
  );
  app.get(
    "/api/tour/featured",
    controller.getFeaturedTours
  );
  app.get(
    "/api/tour/:id",
    controller.getTourById
  );
  
  app.patch(
    "/api/tour/:id",
    [authJwt.verifyToken, authJwt.isAdmin, upload.single("cover_image")],
    controller.updateTour
  )
  app.delete(
    "/api/tour/:id",
    [authJwt.verifyToken, authJwt.isAdmin, upload.single("cover_image")],
    controller.deleteTour
  )
};
