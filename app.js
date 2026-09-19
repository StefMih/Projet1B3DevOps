let taches = [
        "Acheter du pain",
        "Comprendre les étapes DevOps"
    ];

const listeElement = document.getElementById("todo-list");
const inputElement = document.getElementById("task-input");
const btnAjouter = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");

function afficherListe() {
    listeElement.innerHTML = ""; 

    taches.forEach((tache, index) => {
    const li = document.createElement("li");
    li.className = "task-card"; 

    const textSpan = document.createElement("span");
    textSpan.textContent = tache;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "delete-task-btn";

    deleteBtn.addEventListener("click", () => {
        supprimerTache(index);
    });

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    
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

function supprimerEntrée() {
    inputElement.value = ""; 
    
}

function supprimerTache(index) {
    taches.splice(index, 1);
    afficherListe();
}



clearBtn.addEventListener("click", supprimerEntrée);

btnAjouter.addEventListener("click", ajouterTache);

inputElement.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        ajouterTache();
    }
});


afficherListe();
