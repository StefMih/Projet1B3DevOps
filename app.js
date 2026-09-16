let taches = [
    "Acheter du pain",
    "Comprendre les étapes DevOps"
];

const listeElement = document.getElementById("todo-list");
const inputElement = document.getElementById("task-input");
const btnAjouter = document.getElementById("add-btn");

function afficherListe() {
    listeElement.innerHTML = ""; 

    taches.forEach(tache => {
        const li = document.createElement("li");
        li.textContent = tache;
        li.className = "task-card"; 
        listeElement.appendChild(li);
    });
}


function ajouterTache() {
    const texte = inputElement.value.trim(); 

    if (texte !== "") { 
        taches.push(texte); 
        afficherListe();    
        inputElement.value = ""; 
    }
}

btnAjouter.addEventListener("click", ajouterTache);


afficherListe();