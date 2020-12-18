
const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click' , e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

  xhr.open("POST" , url, true);

  xhr.setRequestHeader("Content-Type" , "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readystate === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };

const nimi = document.querySelector('#nimi').value;
console.log("nimikentän sisältö: " + nimi);
const viesti = document.querySelector('#viesti').value;
const email = document.querySelector('#email').value;
var data = JSON.stringify({
  
  "EmailMsg": "Viesti henkilöltä osoitteesta: " + email + ' Viestin sisältö: ' + viesti ,
  "EmailTo" : "saku.kekki", 
  "EmailName" : nimi
});
  xhr.send(data);
}