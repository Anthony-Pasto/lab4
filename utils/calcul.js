/*
 * Auteur : Anthony Pasto
 * Date : 22 septembre 2026
 * Rôle : Calcule le prix de la pizza, des ingrédients et des taxes.
 */

//C3: tu as beaucoup de chiffre magique.
const PRIX_PIZZA_HAWAIIENNE = 12.80;
const PRIX_PIZZA_ALL_DRESSED = 13.30;
const PRIX_PIZZA_SICILIENNE = 11.10;
const PRIX_INGREDIENT = 1.50;
const TAUX_TAXES = 1.15;
const MULT_TAILLE_GRANDE = 1.2;
const MULT_TAILLE_PETITE = 0.8;
const MULT_TAILLE_MOYENNE = 1;

function calculerPrix(pizza, quantite, taille, ingredients) {

    let prix = 0;

    if (pizza === "Hawaienne") {
        prix = PRIX_PIZZA_HAWAIIENNE;
    }
    else if (pizza === "All Dressed") {
        prix = PRIX_PIZZA_ALL_DRESSED;
    }
    else if (pizza === "Sicilienne") {
        prix = PRIX_PIZZA_SICILIENNE;
    }

    let prixPizza = prix;

    //A23 : Modification des majuscules pour des minuscules pour que le serveur puisse les lire et appliquer la multiplication.
    if (taille === "grande") {
        prixPizza *= MULT_TAILLE_GRANDE;
    }
    else if (taille === "petite") {
        prixPizza *= MULT_TAILLE_PETITE;
    }else if (taille === "moyenne") {
        prixPizza *= MULT_TAILLE_MOYENNE;
    }
    

    // Chaque ingrédient supplémentaire coûte 1,50 $.
    let prixIngredients = 0;

    if (ingredients) {
        if (Array.isArray(ingredients)) {
            prixIngredients = ingredients.length * PRIX_INGREDIENT;
        }
        else {
            prixIngredients = PRIX_INGREDIENT;
        }
    }

    //A23 : Ton calcul prend en compte maintenant la taille de la pizza et cause un problème de calcul. il faut donc les séparer pour que le prix des ingrédients ne soit pas affecté par la taille de la pizza.

    prix = prixPizza + prixIngredients;

    prix = prix * Number(quantite);

    let prixTotalAvantTaxes = prix.toFixed(2);

    // Ajoute 15 % de taxes au prix avant taxes.
    prix *= TAUX_TAXES;

    let prixTaxes = prix.toFixed(2);

    prixPizza = prixPizza.toFixed(2);
    prixIngredients = prixIngredients.toFixed(2);

    let toutpris = {
        prixPizza,
        prixIngredients,
        prixTotalAvantTaxes,
        prixTaxes
    };

    return toutpris;
}

module.exports = {
    calculerPrix
};