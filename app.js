const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("accueil");
});

app.listen(3000, () => {
    console.log("Serveur démarré sur le port http://localhost:3000");
});