/*
 * Auteur : Anthony Pasto
 * Date : 22 septembre 2026
 * Rôle : Affiche l'historique et recherche les commandes par téléphone.
 */
const express = require("express");
const router = express.Router();

const sauvegarde = require("../utils/sauvegarde");

router.get("/historique", (req, res) => {
    res.render("pages/historique");
});

router.post("/historique", (req, res) => {
    const telephone = req.body.telephone;

    // Filtre les commandes enregistrées avant de les envoyer à la vue.
    const commandes = sauvegarde.chercherParTelephone(telephone);

    res.render("pages/resultatHistorique", {
        telephone,
        commandes
    });
});

module.exports = router;