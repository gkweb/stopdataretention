// Glade Kettle of gladekettle.com.au, public domain. Forka forka, please! http://github.com/gkweb/
// var now = new Date();
function toggleClass(element, className){
	console.log(element);
    if (!element || !className){
        return;
    }
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

/*document.getElementById("sdtopen").addEventListener("onclick", function (){

console.log("click");


});*/



// if (now.getDate() == 18 && now.getMonth() == 0 && now.getFullYear() == 2014) {

    window.onload = function(){
      var oBody = document.getElementsByTagName('body')[0]; 
      var sdtM = document.getElementById("sdt-main");
      var sdtO = document.getElementById("sdtopen");
      var sdtB = document.getElementById("sdt-modal-close-btn");
      
      sdtO.onclick = function () {
        toggleClass(oBody,"topen");
      };

      sdtB.onclick = function () {
      	toggleClass(oBody,"topen");
      };




      // oBody.style.cssText = "background: #000000; text-align: center; color: #111; font: 2.2em Helvetica; vertical-align: middle"; 
      // oBody.innerHTML = '<div style="width: 960px; margin: 0 auto;"><br /><br />This website is..<br /> <br /><div style="color: #222222">BLACKED OUT!</div><br />..in protest of <a href="https://en.wikipedia.org/wiki/Stop_Online_Piracy_Act" target="_blank" style="color: #220022">pending</a> <a href="https://en.wikipedia.org/wiki/PROTECT_IP_Act" target="_blank" style="color: #220022">legislation</a> which threatens the freedoms of websites like this one and the freedoms of the people who use them.<br /><br />Please <a href="http://americancensorship.org/" target="_blank" style="color: #220022">help protect our free speech</a> against the corporate and political interests which seek to take them away!<br /><br />(And don\'t worry, we\'ll be back in business tomorrow!)</div>'; 
    }
// } if