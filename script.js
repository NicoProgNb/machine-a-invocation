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
    case "chat-Octo":
      emoji = "🐙"
      break
    case "dragon-Debug":
      emoji = "🐉"
      break
    case "licorne-Css":
      emoji = "🦄"
      break
    case "renard-Refacto":
      emoji = "🦊"
      break
  }

    // Contenu dans #message
    message.textContent = `${prenomValue}, ${creatureValue} a entendu ton appel et te suivra tout le Bloc 1 !`

    // Contenu dans #messageEmoji
    messageEmoji.textContent = emoji

    afficher(ecranResultat)
})

// btn - Recommencer
btnRecommencer.addEventListener('click', () => {
    afficher(ecranFormulaire)
    formInvocation.reset()
})