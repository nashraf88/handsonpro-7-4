/*
      JavaScript 6th Edition
      Chapter 6
      Hands-on Project 6-1

      Author: Nazia Ashraf
      Date: 2/17/2023

      Filename: script.js
   */
      "use strict";
      var delivInfo = {};
      var delivSummary = document.getElementById("deliverTo");

      //function to process delivery info
      
      function processDeliveryInfo(){
         //local variable
         var prop;
         
         delivInfo.name = document.getElementById("nameinput").value;
         delivInfo.addr = document.getElementById("addrinput").value;
         delivInfo.city = document.getElementById("cityinput").value;
         delivInfo.email = document.getElementById("emailinput").value;
         delivInfo.phone = document.getElementById("phoneinput").value;
         
         for (prop in delivInfo)
         {
            delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
         }
      }

      function previewOrder() {
         processDeliveryInfo();
         document.getElementsByTagName("section")[0].style.display = "block";
      }

      function createEventListener() {
         var previewBtn = document.getElementById("previewBtn");
         if (previewBtn.addEventListener) {
            previewBtn.addEventListener("click", previewOrder, false);
         } else if (previewBtn.attachEvent) {
            previewBtn.attachEvent("onclick", previewOrder);
         }
      }

      if (window.addEventListener) { 
         window.addEventListener("load", createEventListener, false);
      } else if (window.attachEvent) {
         window.attachEvent("onload", createEventListener);
      }