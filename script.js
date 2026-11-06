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

const message = document.getElementById("message")
const messageEmoji = document.getElementById("messageEmoji")

// ======= //
// Fonctions 
// ======= //

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
    event.preventDefault() 

    const prenomValue = document.getElementById("prenom").value
    const creatureValue = document.getElementById("creature").value

    // switch/case = execution en fonction de la valeur
  let emoji = ""
  switch (creatureValue) {
    case "PoulpiSushi":
      emoji = "🍣"
      break
    case "Dragking":
      emoji = "🐉"
      break
    case "HelloMonkey":
      emoji = "🙉"
      break
    case "Piou":
      emoji = "🐣"
      break
  }

    // Contenu dans #message
    // Choix du .inneHTML plutôt que TextContent : Ajout de balises strong
    message.innerHTML = `Super <strong>${prenomValue}</strong> ! <strong>${creatureValue}</strong> a évolué et te suivra tout le Bloc 1 !`

    // Contenu dans #messageEmoji
    messageEmoji.textContent = emoji

    afficher(ecranResultat)
})

// btn - Recommencer
btnRecommencer.addEventListener('click', () => {
    afficher(ecranFormulaire)
    formInvocation.reset()
})