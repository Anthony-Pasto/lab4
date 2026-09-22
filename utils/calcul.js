function calculerPrix(pizza, quantite, taille, ingredients) {

    let prix = 0;

    if (pizza === "Hawaienne") {
        prix = 12.80;
    }
    else if (pizza === "All Dressed") {
        prix = 13.30;
    }
    else if (pizza === "Sicilienne") {
        prix = 11.10;
    }

    let prixPizza= prix.toFixed(2);

    if (taille === "Grande") {
        prix *= 1.2;
    }
    else if (taille === "Petite") {
        prix *= 0.8;
    }else if (taille === "Moyenne") {
        prix *= 1;
    }
    

    // Exemple : 1,5$ par ingrédient supplémentaire
    if (ingredients) {
        if (Array.isArray(ingredients)) {
            prix += ingredients.length * 1.5;
        }
        else {
            prix += 1.5;
        }
    }
    let prixIngredients = prix - prixPizza;
    prixIngredients = prixIngredients.toFixed(2);

    prix = prix * Number(quantite);

    let prixTotalAvantTaxes = prix.toFixed(2);
    prix *= 1.15; // Ajouter 15% de taxes

    let prixTaxes = prix.toFixed(2);
    let toutpris = {prixPizza, prixIngredients, prixTotalAvantTaxes, prixTaxes};
    return toutpris;
}

module.exports = {
    calculerPrix
};