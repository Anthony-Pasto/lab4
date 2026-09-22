/*
 * Auteur : Anthony Pasto
 * Date : 22 septembre 2026
 * Rôle : Configure et démarre le serveur Express de l'application.
 */
const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const indexRoutes = require("./routes/index");
const resultatRoutes = require("./routes/resultat");
const historiqueRoutes = require("./routes/historique");

app.use("/", historiqueRoutes);
app.use("/", indexRoutes);
app.use("/", resultatRoutes);

// Affiche une page personnalisée pour les adresses qui n'existent pas.
app.use( (req, res) => {
    res.status(404).render("pages/404");
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});