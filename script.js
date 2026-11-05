// ======== //
// Constantes
// ======== //

// Ecrans
const ecranFormulaire = document.getElementById("ecranFormulaire")
const ecranResultat = document.getElementById("ecranResultat")
// Boutons
const btnInvoquer = document.getElementById("invoquer")
const btnRecommencer = document.getElementById("recommencer")
// Formulaires
const formInvocation = document.getElementById("invocation")
const formPrenom = document.getElementById("prenom")
const formCreature = document.getElementById("creature")

// Afficher Formulaire ou Resultat
const afficher = (ecran) => {
  ecranFormulaire.classList.add('cache')
  ecranResultat.classList.add('cache')
  ecran.classList.remove('cache')
}





// =================== //
// Ecouteur d'évênements
// =================== //

// Action lors d'un submit
formInvocation.addEventListener('submit', function(event) {
    // Sécurité de rechargement de page
    event.preventDefault(); 
    console.log("Clic détecté et page bloquée !");

    afficher(ecranResultat)
});

// btn - Recommencer
btnRecommencer.addEventListener('click', () => {
    afficher(ecranFormulaire)
    formInvocation.reset();
})