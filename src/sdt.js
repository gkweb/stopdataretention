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
      oBody.innerHTML += '<div class="sdt-main" id="sdt-main"> <div class="sdt-inner"> <div class="sdt-cnr"> <img src="http://rawgit.com/gkweb/stopdataretention/master/src/images/stretch.png" class="stretch"> <a href="#" id="sdtopen"> <img id="sdtfacebanner" src="http://rawgit.com/gkweb/stopdataretention/master/src/images/sdt-corner@2x.png" alt="Stop Data retention!"> <img id="sdtfacebanner2" class="animated animatedmm infinite mouth" src="http://rawgit.com/gkweb/stopdataretention/master/src/images/sdt-corner-2@2x.png" alt="Stop Data retention!"> </a> <div class="sdtcnrtxt-container animated flash infinite"> <img id="sdtcnrtxt" src="http://rawgit.com/gkweb/stopdataretention/master/src/images/stop_data_retention_txt@2x.png" alt=""></div> </div> </div> </div> <div class="sdt-modal"> <div class="sdt-inner"> <div class="sdt-container"> <a href="#" class="sdt-close-btn" id="sdt-modal-close-btn">×</a> <div class="sdt-content"> <h1>The government wants easy access to your phone location, who you&rsquo;ve been calling and what you&rsquo;ve been searching on google. Additionally they wanto store all this private data for 2 years!</h1> <p>This data isn&rsquo;t necassarily needed to combat terrorism. This data may be accessed by other government agencies, or even third party organizations.</p> <p>Without your help this <strong>will</strong> affect the future of Australia.</p> <a target="_blank" href="http://stopdataretention.info">We need to STOP THIS from happening NOW!</a> </div> </div> </div> </div>'; 
    
      var sdtO = document.getElementById("sdtopen");
      var sdtB = document.getElementById("sdt-modal-close-btn");

      sdtO.onclick = function () {
        toggleClass(oHt,"topen");
      };

      sdtB.onclick = function () {
        toggleClass(oHt,"topen");
      };
};