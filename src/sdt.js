"use strict";
// Glade Kettle of gladekettle.com.au, public domain. Forka forka, please! http://github.com/gkweb/
function toggleClass (element, className) {
    if (!element || !className) {
        return;
    }
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    } else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

window.onload = function (){
      var oBody = document.getElementsByTagName('body')[0]; 
      var oHt = document.getElementsByTagName('html')[0];
      oBody.innerHTML += '<div class="sdt-main" id="sdt-main"> <div class="sdt-inner"> <div class="sdt-cnr"> <img src="http://rawgit.com/gkweb/stopdataretention/master/src/images/stretch.png" class="stretch"> <a href="#" id="sdtopen"> <img id="sdtfacebanner" src="http://rawgit.com/gkweb/stopdataretention/master/src/images/sdt-corner@2x.png" alt="Stop Data retention!"> <img id="sdtfacebanner2" class="animated animatedmm infinite mouth" src="http://rawgit.com/gkweb/stopdataretention/master/src/images/sdt-corner-2@2x.png" alt="Stop Data retention!"> </a> <div class="sdtcnrtxt-container animated flash infinite"> <img id="sdtcnrtxt" src="http://rawgit.com/gkweb/stopdataretention/master/src/images/stop_data_retention_txt@2x.png" alt=""></div> </div> </div> </div> <div class="sdt-modal" id="sdt-modal"> <div class="sdt-inner"> <div class="sdt-container" id="sdt-container"> <a href="#" class="sdt-close-btn" id="sdt-modal-close-btn">×</a> <div class="sdt-content"> <h1>The Australian Government wants to track where you use your phone, who you talk to and maybe even what you look at on the Internet.</h1> <p>They are planning to store your personal information and be able to use it against you for two years.</p><p>You have the right to privacy and freedom to communicate without being watched. </p> <p>But you need to fight for it.</p> <a target="_blank" href="http://stopdataretention.info">Join us.</a> </div> </div> </div> </div>'; 
    
      var sdtO = document.getElementById("sdtopen");
      var sdtB = document.getElementById("sdt-modal-close-btn");

      sdtO.onclick = function () {
        toggleClass(oHt,"topen");
      };

      sdtB.onclick = function () {
        toggleClass(oHt,"topen");
      };



};