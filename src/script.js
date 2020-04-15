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
