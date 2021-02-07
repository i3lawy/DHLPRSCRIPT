// ==UserScript==
// @name AutoSelectCustomes
// @namespace Ali AlMubarak Scripts
// @version 1.0
// @description This script to auto select from ListBox.
// @include     https://*.almubasher.com.sa/NewECorporate/p/billPaymentService/addNewBillAction.menu*
// @include     https://*.almubasher.com.sa/NewECorporate/p/billPaymentService/addNewBillAction.do*
// @downloadURL https://github.com/i3lawy/dhlscripts/raw/main/AutoSelect.js
// @updateURL   https://github.com/i3lawy/dhlscripts/raw/main/AutoSelect.js
// @grant none
// ==/UserScript==
for(i = 55; i < 70; i++)
{
   if(document.getElementById('indexBillCode').options[i].text == "Customs")
   {
     document.getElementById('indexBillCode').value = i;
     console.log("The Customes Selected with ID: " + i);
   }
}
