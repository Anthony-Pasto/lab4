const express = require("express");
const router = express.Router();

const calcul = require("../utils/calcul");

router.post("/resultat", (req, res) => {

      const toutpris = calcul.calculerPrix(
        req.body.pizza,
        req.body.quantite,
        req.body.taille,
        req.body.ingredients
    );

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