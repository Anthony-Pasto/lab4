/*
 * Auteur : Anthony Pasto
 * Date : 22 septembre 2026
 * Rôle : Calcule, enregistre et affiche le résumé d'une commande.
 */
const express = require("express");
const router = express.Router();

const calcul = require("../utils/calcul");
const sauvegarde = require("../utils/sauvegarde");

router.post("/resultat", (req, res) => {

    // Calcule le prix à partir des choix envoyés par le formulaire.
    const toutpris = calcul.calculerPrix(
        req.body.pizza,
        req.body.quantite,
        req.body.taille,
        req.body.ingredients
    );

    const commande = {
        pizza: req.body.pizza,
        quantite: req.body.quantite,
        taille: req.body.taille,
        ingredients: req.body.ingredients,
        adresse: req.body.adresse,
        code_postal: req.body.code_postal,
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        courriel: req.body.courriel,
        paiement: req.body.paiement,
        prixTotal: toutpris.prixTaxes,
        date: new Date().toLocaleString("fr-CA", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        })
    };

    // Conserve la commande pour permettre une recherche ultérieure.
    sauvegarde.enregistrerCommande(commande);

    res.render("pages/command", {
        pizza: req.body.pizza,
        quantite: req.body.quantite,
        taille: req.body.taille,
        ingredients: req.body.ingredients,
        adresse: req.body.adresse,
        code_postal: req.body.code_postal,
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        courriel: req.body.courriel,
        paiement: req.body.paiement,
        toutpris: toutpris
    });
});

module.exports = router;