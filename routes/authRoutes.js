const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })//what info we are allowed to access
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();//basicaly kills cookie in browser
    res.send(req.user);//should return null
  })

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
