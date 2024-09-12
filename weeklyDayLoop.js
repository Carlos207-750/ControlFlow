function getDayWithLoop(day) {
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // Boucle à travers le tableau des jours
    for (let i = 0; i < jours.length; i++) {
        // Les jours sont indexés à partir de 0, donc on doit comparer avec day-1
        if (day === i + 1) {
            return jours[i];
        }
    }

    return "Numéro de jour invalide";
}

console.log(getDayWithLoop(5));  // "vendredi"