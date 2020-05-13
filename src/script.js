function verifmail(a) {
  testm = false; // champ vide = faux

  //permet de tester tout les caractères rentrer
  for (var j = 1; j < a.length; j++) {
    if (a.charAt(j) == "@") {
      // vérifie la présence "@" dans la sélection
      if (j < a.length - 4) {
        //vérifie si il y au moins 4 lettres après le "@"
        for (var k = j; k < a.length - 2; k++) {
          // On ouvre une seconde boucle pour
          if (a.charAt(k) == ".") testm = true;
        }
      }
    }
  }

  if (testm == false) {
    alert("Votre adresse mail est incorrecte");
  } else document.getElementById("zone2").style.display = "block";
  document.getElementById("emailHelp").style.display = "block";
  document.getElementById("butt_verif").style.display = "none";
  document.getElementById("butt_submit").style.display = "block";

  return testm;
}
/////////////////////////////////////////////////////////////////////////////////
//OBJECTIF → vérifier à chaque ligne
// 1_ lorsque click sur input suivant (ex: input 2)
// 2_ function vérifier input précédant (ex: on vérifie input 1)
// 3_ si "" alors alert 'case vide"

//la fonction de vérification si vide
function validateForm() {
  var nameverif = document.forms["formulaire"]["fnom"].value;
  if (nameverif == "") {
    alert("nameverif est pas là");
    return false;
    // } else {
    //   alert("yes");
    // }
  }
  //si clique sur l'input "prénom" → lance la function validate
  // function ve_prenom() {
  //   alert("oui tu as bien cliqué");
  //   return validateForm();
  // }
}
