const express = require("express");

const router = express.Router();

router.get("/resultat", (req, res) => {
    res.render("pages/command");
});

router.post("/resultat", (req, res) => {
  router.post("/resultat", (req, res) => {
    res.render("pages/command", req.body);
});
});

module.exports = router;