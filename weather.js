'https://func-weather.azurewebsites.net/api/HttpTriggerCSharp1?code=sj2yLE95KCJaC3FaAbnpq1iy64bu2fCt3VTYIH61rZa7/aajEUiyFg==&DeviceId=5fb4fd6e483a480009a1ec47$amount=10'

var getJSON = function(url, callback) {

var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
var status = xhr.status;
if (status == 200) {
callback(null, xhr.response);
} else {
callback(status);
}
};
xhr.send();
};

getJSON('https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&deviceId=5fb4fd6e483a480009a1ec47&amount=10', function(err, data){
let taulukko = `<table width="100%" style="border=1px solid black">`;

console.log(data);
const historia = data.map(function(mittaus){
taulukko = taulukko + `<tr><td>${mittaus.Hum}</td></tr>`; 
});
taulukko = taulukko + `</table>`;
document.body.innerHTML = taulukko;
})