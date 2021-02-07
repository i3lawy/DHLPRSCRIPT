// ==UserScript==
// @name AutoBack
// @namespace Ali AlMubarak Scripts
// @version 1.0
// @description This script to back automatically from end of the bill.
// @include     https://*.almubasher.com.sa/NewECorporate/p/billPaymentService/billDetailsAcceptAction.do*
// @downloadURL https://github.com/i3lawy/dhlscripts/raw/main/AutoBack.js
// @updateURL   https://github.com/i3lawy/dhlscripts/raw/main/AutoBack.js
// @grant none
// ==/UserScript==
if( document.getElementsByClassName('cont_mens')[0].innerText == "The Bill Payment Batch update has been completed successfully" )
{
    javascript:goToAction('/NewECorporate/p/billPaymentService/addNewBillAction.do');
}
else
{
    console.log("This Bill had problem cann't go back");
}
