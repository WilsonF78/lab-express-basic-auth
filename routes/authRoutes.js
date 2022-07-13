// routes/auth.routes.js

const { Router } = require("express");
const router = new Router();

// .get() route ==> to display the signup form to users
router.get("/text", (req, res) => res.render("auth/signup", {}));

// .post() route ==> to process form dataaut

module.exports = router;
