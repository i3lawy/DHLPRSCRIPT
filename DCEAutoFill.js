// ==UserScript==
// @name DCE AutoFill
// @namespace Ali AlMubarak @ +966581604111 | contact.alawy@gmail.com
// @version 1.7.7
// @description This script to auto select items, remove not required to fill it.
// @include https://dcesa2.dhl.com/*
// @downloadURL https://github.com/i3lawy/DHLPRSCRIPT/raw/main/DCEAutoFill.js
// @updateURL   https://github.com/i3lawy/DHLPRSCRIPT/raw/main/DCEAutoFill.js
// @grant none
// ==/UserScript==
if( location.pathname == "/dce47/modules/ShipmentDetails.aspx" )
{
  var Inco = document.getElementById("cp2_ddlShipmentInfoIncoterms");
  var PkgType = document.getElementById("cp2_ddlShipmentInfoPkgType");
  var Post = document.getElementById("cp2_txtConsigneeInfoEnglishPostal");
  var tel = document.getElementById("cp2_txtConsigneeInfoEnglishPhone");
  var adrs1 = document.getElementById("cp2_txtConsigneeInfoEnglishAddress1");
  var adrs2 = document.getElementById("cp2_txtConsigneeInfoEnglishAddress2");
  var adrs3 = document.getElementById("cp2_txtConsigneeInfoEnglishAddress3");
  var listHide = ["cp2_ConsigneeContactFirstName", "cp2_ConsigneeState", "cp2_ConsigneeContactNationality", "cp2_ConsigneeMobileNumber", "cp2_ConsigneeFloor", "cp2_ConsigneeStreetNumber", "cp2_ConsigneeDistrictName"
                 , "cp2_ConsigneeState", "cp2_ConsigneeContactLastName", "cp2_ConsigneeContactLanguageCode", "cp2_ConsigneeFaxNumber", "cp2_ConsigneeEmailAddress", "cp2_ConsigneeBuildingName", "cp2_ConsigneeStreetName"
                 , "cp2_ConsigneeContactName", "cp2_ConsigneeAddressLine1Local", "cp2_ConsigneeAddressLine2Local", "cp2_ConsigneeAddressLine3Local", "cp2_ConsigneeCityLocal", "cp2_ConsigneeContactNameLocal", "cp2_ConsigneeTelephoneNumberLocal"
                 , "cp2_ConsigneeMobileNumberLocal", "cp2_ConsigneeContactFirstNameLocal", "cp2_ConsigneeContactNationalityLocal", "cp2_ConsigneeStateLocal", "cp2_ConsigneeCountryLocal", "cp2_ConsigneeFaxNumberLocal", "cp2_ConsigneeEmailAddressLocal"
                 , "cp2_ConsigneeContactLastNameLocal", "cp2_ConsigneeCustomsID", "cp2_ConsigneeCustomsReference", "cp2_ConsigneeRoleType", "cp2_ConsigneeInstructions", "cp2_pnlConsigneeBrokerDetails", "cp2_ConsigneeImporterID", "cp2_ConsigneeRelatedShipper"
                 , "cp2_ConsigneeUserDefinedFields"];
  setInterval(NtW(), 3000);
  for(var i = 0; i < listHide.length; i++)
  {
      document.getElementById(listHide[i]).style.display = "none";
  }
  if( ( document.getElementById("cp2_txtShipmentInfoSD").value == document.getElementById("cp2_txtShipmentInfoMan").value == document.getElementById("cp2_txtShipmentInfoArr").value ) == true ) return;
  if(Post.value == null || Post.value !== 10001)
  {
    Post.value = 10001;
  }

  if(tel.value == null || tel.value.length !== 9)
  {
     tel.value = 123456789;
  }
  if(Inco.value !== "CIF")
  {
    Inco.value = "CIF";
  }

  if(PkgType.value !== "PKA")
  {
    PkgType.value = "PKA";
  }
}
else if ( location.pathname == "/dce47/modules/LineItemDetails.aspx" )
{
  var listHide = ["cp2_LineItemUOM2", "cp2_LineItemUOM3", "cp2_LineItemUOM4", "cp2_LineItemUOM5", "cp2_LineItemUOM6", "cp2_LineItemUOM7", "cp2_LineItemUOM8"
                 , "cp2_LineItemQty2", "cp2_LineItemQty3", "cp2_LineItemQty4", "cp2_LineItemQty5", "cp2_LineItemQty6", "cp2_LineItemQty7", "cp2_LineItemQty8"];

  var hideTableList = [0, 3, 4, 5];
  var hideTableList1 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var Invo = document.getElementById("cp2_txtInvNum");
  document.getElementById("cp2_txtNetWeight").addEventListener("change", function()
  {
    document.getElementById("cp2_gvLineItemCustomFields_txtCustomFieldValue_1").value = document.getElementById("cp2_txtNetWeight").value
  });
  if( Invo.value !== null || Invo.value !== "" )
  {
    Invo.value = "";
  }
  document.getElementsByClassName("grid_8 omega")[0].getElementsByClassName("fieldset-section")[0].style.display = "none";
  document.getElementsByClassName("grid_8 alpha")[0].getElementsByClassName("fieldset-section")[2].style.display = "none";
  for(i = 0; i < listHide.length; i++)
  {
    document.getElementById(listHide[i]).style.display = "none";
  }
  for(i = 0; i < hideTableList.length; i++)
  {
    document.getElementById("Details").getElementsByTagName("tr")[hideTableList[i]].style.display = "none";
  }
  for(i = 0; i < hideTableList1.length; i++)
  {
    document.getElementsByClassName("GridViewTextFields")[0].getElementsByTagName("tr")[hideTableList1[i]].style.display = "none";
  }
}
else if ( location.pathname == "/dce47/modules/CalculationResultDetails.aspx" )
{
  console.log("Billing Page!");
  var pl = ["EDI", "DUTY", "TAX", "OTHERCHARGE", "OTHERFEESCHARGES", "OTHERULESPAPERS"];

  if( document.getElementById("cp2_gridCalculatedVariables_ddlPageSize").value != 100 )
  {
     document.getElementById("cp2_gridCalculatedVariables_ddlPageSize").value = 100;
     javascript:setTimeout('__doPostBack(\'ctl00$cp2$gridCalculatedVariables$ctl18$ddlPageSize\',\'\')', 0);
     var it = setInterval(function(){
         if( document.getElementById("cp2_gridCalculatedVariables").rows[84].style.display != 'none' ){
             for(i = 1; i < 85 ; i++)
             {
               var fl = document.getElementById("cp2_gridCalculatedVariables").rows[i];
               if( fl.cells[1].innerText != undefined )
                 {
                   if( pl.includes(fl.cells[1].innerText) == false )
                   {
                     fl.style.display = 'none';
                   }
                 }
             }
         }
     }
     , 500);
  }
}

function NtW(){
    var outboxTotal = document.getElementById("cp2_upShipInfoTab").getElementsByTagName('div')[0];
  var NwBox = document.createElement('div');
  NwBox.setAttribute("id", "cstmzNet");
  NwBox.setAttribute("class", "grid_1 alpha omega col2");
  outboxTotal.appendChild(NwBox);
  // remove Div class Clear
  var ele = outboxTotal.getElementsByClassName("clear")[0];
  ele.remove();
  // Wt Net
  var NtWt = document.createElement('div');
  NtWt.setAttribute("id", "txtNt");
  document.getElementById("cstmzNet").appendChild(NtWt);
  var spNtWt = document.createElement('label');
  spNtWt.setAttribute("for", "txtInputWt");
  spNtWt.innerHTML = "Net Wt";
  document.getElementById("txtNt").appendChild(spNtWt);
  var inNtWt = document.createElement('input');
  inNtWt.setAttribute("id", "txtInputWt");
  inNtWt.setAttribute("type", "text");
  inNtWt.setAttribute("readonly", "readonly");
  inNtWt.setAttribute("class", "ui-input-field amount");
  inNtWt.setAttribute("style", "text-align: center;");
  document.getElementById("txtNt").appendChild(inNtWt);
  // Qt Net
  var QtWt = document.createElement('div');
  QtWt.setAttribute("id", "txtQt");
  document.getElementById("cstmzNet").appendChild(QtWt);
  var spQtWt = document.createElement('label');
  spQtWt.setAttribute("for", "txtInputQt");
  spQtWt.innerHTML = "Net Qt";
  document.getElementById("txtQt").appendChild(spQtWt);
  var inQtWt = document.createElement('input');
  inQtWt.setAttribute("id", "txtInputQt");
  inQtWt.setAttribute("type", "text");
  inQtWt.setAttribute("readonly", "readonly");
  inQtWt.setAttribute("class", "ui-input-field amount");
  inQtWt.setAttribute("style", "text-align: center;");
  document.getElementById("txtQt").appendChild(inQtWt);
  var clrt = document.createElement('div');
  clrt.setAttribute("class", "clear");
  outboxTotal.appendChild(clrt);
  var NetWt = 0;
  var NetQt = 0;
  var GrsWt = document.getElementById("cp2_txtShipmentInfoGrsWt").value;
  var LngTb = document.getElementById("cp2_gvLineItems").getElementsByTagName("tr").length;
  for(var i = 1; i < LngTb; i++){
    NetWt += parseInt(document.getElementById("cp2_gvLineItems").rows[i].cells[15].innerText);
    NetQt += parseInt(document.getElementById("cp2_gvLineItems").rows[i].cells[8].innerText);
  }
  var DfWt = GrsWt - NetWt;
  document.getElementById("txtInputWt").value = DfWt;
  document.getElementById("txtInputQt").value = NetQt;
  document.getElementById("cp2_txtShipmentInfoGrsWt").addEventListener("change", function()
  {
    var NetWt = 0;
    var GrsWt = document.getElementById("cp2_txtShipmentInfoGrsWt").value;
    var LngTb = document.getElementById("cp2_gvLineItems").getElementsByTagName("tr").length;
    for(var i = 1; i < LngTb; i++){
      NetWt += parseInt(document.getElementById("cp2_gvLineItems").rows[i].cells[15].innerText);
    }
    var DfWt = GrsWt - NetWt;

    document.getElementById("txtInputWt").value = DfWt;
  });
}
