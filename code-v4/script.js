

// Diesen Code habe ich mit KI gemacht da ich noch nicht JS kann habe ich es ausprobiert


// Preis, Beschreibung und Total zum Bild anzeigen
function zeigeBild(spalte, bild) {
  spalte.querySelector(".preis").textContent = "CHF " + bild.dataset.preis;

  // die Beschreibung heisst z.B. info-board, die Leash hat keine
  let info = document.querySelector("#info-" + spalte.id);
  if (info) {
    info.querySelector(".marke").textContent = bild.dataset.marke;
    info.querySelector(".level").textContent = "Level: " + bild.dataset.level;
    info.querySelector(".text").textContent = bild.dataset.text;

    // nur die Finne hat ein Modell
    let modell = info.querySelector(".modell");
    if (modell) {
      modell.textContent = bild.dataset.modell;
    }
  }

  zeigeTotal();
}

// Preise von allen sichtbaren Bildern zusammenzählen
function zeigeTotal() {
  let summe = 0;
  let bilder = document.querySelectorAll(".active");

  for (let bild of bilder) {
    summe = summe + Number(bild.dataset.preis);
  }

  document.querySelector(".total-betrag").textContent = "CHF " + summe.toFixed(2);
}

// jede Spalte bekommt ihre Pfeile
let spalten = document.querySelectorAll(".column");

for (let spalte of spalten) {
  let bilder = spalte.querySelectorAll("img");
  let nummer = 0;

  // Pfeil oben: ein Bild zurück
  spalte.querySelector(".up").addEventListener("click", function () {
    bilder[nummer].classList.remove("active");
    nummer = nummer - 1;
    if (nummer < 0) {
      nummer = bilder.length - 1;
    }
    bilder[nummer].classList.add("active");
    zeigeBild(spalte, bilder[nummer]);
  });

  // Pfeil unten: ein Bild weiter
  spalte.querySelector(".down").addEventListener("click", function () {
    bilder[nummer].classList.remove("active");
    nummer = nummer + 1;
    if (nummer > bilder.length - 1) {
      nummer = 0;
    }
    bilder[nummer].classList.add("active");
    zeigeBild(spalte, bilder[nummer]);
  });

  // beim Laden das erste Bild anzeigen
  zeigeBild(spalte, bilder[0]);
}
