// Location links
function Mofongo() {
    window.open("https://www.google.com/maps/place/Tu+casita+tropical/@18.4734832,-66.8722304,16z/data=!4m5!3m4!1s0x8c02e9c5a35768d1:0xe01d878a84e8c085!8m2!3d18.4734832!4d-66.8696004")
}

function Montones() {
    window.open("https://www.google.com/maps/place/Montones+Beach/@18.5123638,-67.0617453,14.47z/data=!4m5!3m4!1s0x8c0295b96dcb3e51:0x86a616c3f65097a1!8m2!3d18.513755!4d-67.0655251")
}
function elYunque() {
    window.open("https://www.google.com/maps/place/El+Yunque+National+Forest/@18.2917726,-65.83024,12.86z/data=!4m5!3m4!1s0x8c04a1b32efdd0c9:0x8342f6bc9bb224d1!8m2!3d18.2952094!4d-65.7998657")
}

function vsj() {
    window.open("https://www.google.com/maps/place/Viejo+San+Juan,+San+Juan/@18.4645622,-66.1160893,14z/data=!3m1!4b1!4m5!3m4!1s0x8c036eb8b656b379:0x86bd62881c6ab915!8m2!3d18.463203!4d-66.1147571")
}

function Lajas() {
    window.open("")
}

function Ponce() {
    window.open("")
}

function Guancha() {
    window.open("")
}

function Salinas() {
    window.open("https://www.google.com/maps/place/Salinas+de+Cabo+Rojo/@17.9565577,-67.1990038,16.34z/data=!4m12!1m6!3m5!1s0x8c1d5aaf0990b721:0xbb06b99ecb42b685!2sSalinas+de+Cabo+Rojo!8m2!3d17.9568367!4d-67.199436!3m4!1s0x8c1d5aaf0990b721:0xbb06b99ecb42b685!8m2!3d17.9568367!4d-67.199436")
}

function Sucia() {
    window.open("")
}

function Jobos() {
    window.open("")
}

function Survival() {
    window.open("")
}

function Caverna() {
    window.open("")
}

function Ventana() {
    window.open("")
}

function Observatorio() {
    window.open("")
}

function Anasco() {
    window.open("")
}

function Pinones() {
    window.open("")
}

function Crashboat() {
    window.open("")
}

function SevenSeas() {
    window.open("")
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function yunqueMenu() {
  document.getElementById("Yunquedropdown").classList.toggle("show");
}
function vsjMenu() {
  document.getElementById("vsjdropdown").classList.toggle("show");
}
function LajasMenu() {
  document.getElementById("Lajasdropdown").classList.toggle("show");
}
function PonceMenu() {
  document.getElementById("Poncedropdown").classList.toggle("show");
}
function GuanchaMenu() {
  document.getElementById("Guanchadropdown").classList.toggle("show");
}
function SalinasMenu() {
  document.getElementById("Salinasdropdown").classList.toggle("show");
}
function SuciaMenu() {
  document.getElementById("Suciadropdown").classList.toggle("show");
}
function JobosMenu() {
  document.getElementById("Jobosdropdown").classList.toggle("show");
}
function SurvivalMenu() {
  document.getElementById("Survivaldropdown").classList.toggle("show");
}
function CavernaMenu() {
  document.getElementById("Cavernadropdown").classList.toggle("show");
}
function JobosMenu() {
  document.getElementById("Jobosdropdown").classList.toggle("show");
}
function VentanaMenu() {
  document.getElementById("Ventanadropdown").classList.toggle("show");
}
function ObservatorioMenu() {
  document.getElementById("Observatoriodropdown").classList.toggle("show");
}
function AnascoMenu() {
  document.getElementById("Anascodropdown").classList.toggle("show");
}
function PinonesMenu() {
  document.getElementById("Pinonesdropdown").classList.toggle("show");
}
function CrashboatMenu() {
  document.getElementById("Crashboatdropdown").classList.toggle("show");
}
function SevenSeasMenu() {
  document.getElementById("SevenSeasdropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
