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

    prix = prix * Number(quantite);

    prix *= 1.15; // Ajouter 15% de taxes

    prix = prix.toFixed(2); // Arrondir à 2 décimales

    return prix;
}

module.exports = {
    calculerPrix
};