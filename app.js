
const taches = [
    "Acheter du pain",
    "Comprendre les étapes DevOps",
    "Apprendre Docker"
];

const listeElement = document.getElementById("todo-list");

function afficherListe() {
    listeElement.innerHTML = ""; 

    taches.forEach(tache => {
        const li = document.createElement("li");
        li.textContent = tache;
        listeElement.appendChild(li);
    });
}

afficherListe();