// on récupère la référence des éléments du DOM
const form = document.querySelector("form");
const display = document.querySelector("div p");

// on écoute l'événement submit sur le formulaire et on exécute la fonction callback
form.addEventListener("submit", function (event) {
  // on empêche la soumission normale du formulaire (comportement normal du form en HTML)
  event.preventDefault();

  // on stocke les données du formulaire dans une variable en utilisant l'objef FormData qui va collecter les infos du formulaire pour nous
  const formData = new FormData(event.target);

  // on envoie les données du formulaire à notre script PHP en utilisant la technologie AJAX
  // pour ça on utilise la méthode JS fetch()
  // 1er param : l'adresse du script qui va traiter les données
  // 2eme param : des informations nécessaires pour l'envoi en post
 // fetch("http://localhost:3000", {
 
    fetch("https://kyodesign.fr/lionel/ajaxform/backend/index.php", {
    method: "POST",
    body: formData,
  })
    .then(
      // on récupère la réponse du serveur en JSON et on la transforme en objet Javascript
      function (response) {
        return response.json(); // retourne un objet javascript
      }
    )
    .then(function (data) {
      console.log(data);
      display.textContent = `Welcome ${data.name}`; // on affiche les infos dans le HTML
    });
});
