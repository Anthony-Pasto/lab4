/*
 * Auteur : Anthony Pasto
 * Date : 22 septembre 2026
 * Rôle : Lit, enregistre et recherche les commandes dans un fichier JSON.
 */
const fs = require("fs");
const path = require("path");

const fichierCommandes = path.join(__dirname, "../data/commandes.json");

function enregistrerCommande(commande) {

    let commandes = [];

    // Recharge les commandes existantes avant d'ajouter la nouvelle.
    if (fs.existsSync(fichierCommandes)) {
        const contenu = fs.readFileSync(fichierCommandes, "utf8");

        if (contenu.trim() !== "") {
            commandes = JSON.parse(contenu);
        }
    }

    commandes.push(commande);

    fs.writeFileSync(
        fichierCommandes,
        JSON.stringify(commandes, null, 4)
    );
}

function chercherParTelephone(telephone) {

    if (!fs.existsSync(fichierCommandes)) {
        return [];
    }

    const contenu = fs.readFileSync(fichierCommandes, "utf8");

    if (contenu.trim() === "") {
        return [];
    }

    const commandes = JSON.parse(contenu);

    // Retourne uniquement les commandes du numéro demandé.
    return commandes.filter(commande =>
        commande.telephone === telephone
    );
}

module.exports = {
    enregistrerCommande,
    chercherParTelephone
};