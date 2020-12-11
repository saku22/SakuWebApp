
const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click' , e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST" , url, true);

  xhr.setRequestHeader("Content-Type" , "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readystate === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };

const nimi = document.querySelector('#nimi').value;
console.log("nimikentän sisältö: " + nimi);
var data = JSON.stringify({
  
  "EmailMsg": "Tähän tulee sisältö" ,
  "EmailAddress": "saku.kekki@edu.salpaus.fi" ,
  "EmailTo" : "saku.kekki@edu.salpaus.fi" , 
  "EmailName" : nimi
});
  xhr.send(data);
}