const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] }) //what info we are allowed to access
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),//middleware
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout(); //basicaly kills cookie in browser
    res.redirect("/");//CHANGE THIS TO AJAX BASED, LECTURE 84
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
