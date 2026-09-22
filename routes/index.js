/*
 * Auteur : Anthony Pasto
 * Date : 22 septembre 2026
 * Rôle : Gère les routes de la page d'accueil et du formulaire de commande.
 */
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    // Affiche le formulaire principal de l'application.
    res.render("pages/accueil");
});

router.post("/", (req, res) => {
    res.render("pages/accueil");
});

module.exports = router;