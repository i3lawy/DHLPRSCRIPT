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
var _0x11c1d4=_0x2d44;(function(_0x580223,_0x5016bd){var _0x1a9a99=_0x2d44,_0x1a32ea=_0x580223();while(!![]){try{var _0x1214fa=parseInt(_0x1a9a99(0x168))/0x1+-parseInt(_0x1a9a99(0x173))/0x2+parseInt(_0x1a9a99(0x127))/0x3+-parseInt(_0x1a9a99(0x15a))/0x4*(parseInt(_0x1a9a99(0x10c))/0x5)+parseInt(_0x1a9a99(0x12d))/0x6+-parseInt(_0x1a9a99(0x11e))/0x7+-parseInt(_0x1a9a99(0x13e))/0x8*(-parseInt(_0x1a9a99(0x123))/0x9);if(_0x1214fa===_0x5016bd)break;else _0x1a32ea['push'](_0x1a32ea['shift']());}catch(_0xfb8fa5){_0x1a32ea['push'](_0x1a32ea['shift']());}}}(_0x9ab4,0xdab35));function _0x9ab4(){var _0x455e09=['cp2_ConsigneeContactLastNameLocal','cp2_ConsigneeFaxNumber','cp2_gvLineItems','8324953ifOWSD','type','createElement','cp2_ConsigneeStreetName','cp2_txtShipmentInfoSD','18AYWKMY','TAX','input','cp2_ConsigneeContactNameLocal','1163589PGMQWf','cp2_txtConsigneeInfoEnglishAddress1','change','cells','GridViewTextFields','cp2_LineItemQty4','8648988WUhGQJ','txtNt','none','cp2_gvLineItemCustomFields_txtCustomFieldValue_1','setAttribute','for','/dce47/modules/ShipmentDetails.aspx','cp2_LineItemUOM4','cp2_ConsigneeEmailAddress','pathname','cp2_gridCalculatedVariables_ddlPageSize','CIF','cp2_LineItemQty3','innerHTML','/dce47/modules/LineItemDetails.aspx','EDI','cp2_LineItemQty8','987216uIfUOR','appendChild','cp2_LineItemQty5','cp2_ConsigneeCustomsReference','cp2_ConsigneeStateLocal','cp2_ConsigneeContactLastName','/dce47/modules/CalculationResultDetails.aspx','cp2_txtConsigneeInfoEnglishAddress2','cp2_txtConsigneeInfoEnglishAddress3','cp2_txtInvNum','cp2_ConsigneeCustomsID','Net\x20Qt','cp2_ConsigneeContactNationality','getElementsByClassName','text','txtInputQt','cp2_LineItemUOM2','cp2_ConsigneeContactFirstName','cp2_LineItemUOM6','cp2_LineItemUOM8','Details','OTHERFEESCHARGES','cp2_pnlConsigneeBrokerDetails','readonly','cp2_ConsigneeMobileNumberLocal','cstmzNet','cp2_ConsigneeRelatedShipper','txtInputWt','116YcGrqK','class','txtQt','cp2_ConsigneeUserDefinedFields','style','getElementById','OTHERCHARGE','cp2_ConsigneeContactFirstNameLocal','length','DUTY','getElementsByTagName','grid_1\x20alpha\x20omega\x20col2','cp2_gridCalculatedVariables','cp2_ConsigneeAddressLine2Local','1710922YrSLKT','cp2_LineItemUOM3','clear','Net\x20Wt','addEventListener','div','cp2_txtConsigneeInfoEnglishPhone','OTHERULESPAPERS','cp2_LineItemQty6','display','grid_8\x20alpha','2773214PnWnCG','cp2_ddlShipmentInfoIncoterms','value','grid_8\x20omega','cp2_txtNetWeight','54380jYFSNQ','cp2_ConsigneeStreetNumber','cp2_txtConsigneeInfoEnglishPostal','ui-input-field\x20amount','cp2_ConsigneeFloor','cp2_ConsigneeState','innerText','cp2_ConsigneeCityLocal','cp2_txtShipmentInfoGrsWt','cp2_LineItemUOM5','/dce47/Modules/LineItemDetails.aspx','rows','cp2_ConsigneeEmailAddressLocal','cp2_txtShipmentInfoMan','fieldset-section'];_0x9ab4=function(){return _0x455e09;};return _0x9ab4();}function _0x2d44(_0x38cc91,_0xce412b){var _0x9ab487=_0x9ab4();return _0x2d44=function(_0x2d4486,_0x535cd3){_0x2d4486=_0x2d4486-0x108;var _0x5210be=_0x9ab487[_0x2d4486];return _0x5210be;},_0x2d44(_0x38cc91,_0xce412b);}if(location['pathname']==(_0x11c1d4(0x133)||'/dce47/Modules/ShipmentDetails.aspx')){var Inco=document[_0x11c1d4(0x15f)](_0x11c1d4(0x108)),PkgType=document['getElementById']('cp2_ddlShipmentInfoPkgType'),Post=document[_0x11c1d4(0x15f)](_0x11c1d4(0x10e)),tel=document[_0x11c1d4(0x15f)](_0x11c1d4(0x16e)),adrs1=document[_0x11c1d4(0x15f)](_0x11c1d4(0x128)),adrs2=document[_0x11c1d4(0x15f)](_0x11c1d4(0x145)),adrs3=document[_0x11c1d4(0x15f)](_0x11c1d4(0x146)),listHide=[_0x11c1d4(0x14f),_0x11c1d4(0x111),_0x11c1d4(0x14a),'cp2_ConsigneeMobileNumber',_0x11c1d4(0x110),_0x11c1d4(0x10d),'cp2_ConsigneeDistrictName',_0x11c1d4(0x111),_0x11c1d4(0x143),'cp2_ConsigneeContactLanguageCode',_0x11c1d4(0x11c),_0x11c1d4(0x135),'cp2_ConsigneeBuildingName',_0x11c1d4(0x121),'cp2_ConsigneeContactName','cp2_ConsigneeAddressLine1Local',_0x11c1d4(0x167),'cp2_ConsigneeAddressLine3Local',_0x11c1d4(0x113),_0x11c1d4(0x126),'cp2_ConsigneeTelephoneNumberLocal',_0x11c1d4(0x156),_0x11c1d4(0x161),'cp2_ConsigneeContactNationalityLocal',_0x11c1d4(0x142),'cp2_ConsigneeCountryLocal','cp2_ConsigneeFaxNumberLocal',_0x11c1d4(0x118),_0x11c1d4(0x11b),_0x11c1d4(0x148),_0x11c1d4(0x141),'cp2_ConsigneeRoleType','cp2_ConsigneeInstructions',_0x11c1d4(0x154),'cp2_ConsigneeImporterID',_0x11c1d4(0x158),_0x11c1d4(0x15d)];setInterval(NtW(),0xbb8);for(var i=0x0;i<listHide['length'];i++){document[_0x11c1d4(0x15f)](listHide[i])[_0x11c1d4(0x15e)][_0x11c1d4(0x171)]=_0x11c1d4(0x12f);}if(document['getElementById'](_0x11c1d4(0x122))[_0x11c1d4(0x109)]==document[_0x11c1d4(0x15f)](_0x11c1d4(0x119))[_0x11c1d4(0x109)]==document[_0x11c1d4(0x15f)]('cp2_txtShipmentInfoArr')[_0x11c1d4(0x109)]==!![])return;(Post[_0x11c1d4(0x109)]==null||Post[_0x11c1d4(0x109)]!==0x2711)&&(Post['value']=0x2711),(tel[_0x11c1d4(0x109)]==null||tel[_0x11c1d4(0x109)]['length']!==0x9)&&(tel['value']=0x75bcd15),Inco[_0x11c1d4(0x109)]!==_0x11c1d4(0x138)&&(Inco['value']=_0x11c1d4(0x138)),PkgType['value']!=='PKA'&&(PkgType[_0x11c1d4(0x109)]='PKA');}else{if(location['pathname']==(_0x11c1d4(0x13b)||_0x11c1d4(0x116))){var listHide2=[_0x11c1d4(0x14e),_0x11c1d4(0x169),_0x11c1d4(0x134),_0x11c1d4(0x115),_0x11c1d4(0x150),'cp2_LineItemUOM7',_0x11c1d4(0x151),'cp2_LineItemQty2',_0x11c1d4(0x139),_0x11c1d4(0x12c),_0x11c1d4(0x140),_0x11c1d4(0x170),'cp2_LineItemQty7',_0x11c1d4(0x13d)],hideTableList=[0x0,0x3,0x4,0x5],hideTableList1=[0x0,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa],Invo=document[_0x11c1d4(0x15f)](_0x11c1d4(0x147));document[_0x11c1d4(0x15f)](_0x11c1d4(0x10b))[_0x11c1d4(0x16c)](_0x11c1d4(0x129),function(){var _0x3d8e5e=_0x11c1d4;document['getElementById'](_0x3d8e5e(0x130))[_0x3d8e5e(0x109)]=document[_0x3d8e5e(0x15f)](_0x3d8e5e(0x10b))[_0x3d8e5e(0x109)];});(Invo['value']!==null||Invo[_0x11c1d4(0x109)]!=='')&&(Invo[_0x11c1d4(0x109)]='');document[_0x11c1d4(0x14b)](_0x11c1d4(0x10a))[0x0][_0x11c1d4(0x14b)](_0x11c1d4(0x11a))[0x0][_0x11c1d4(0x15e)][_0x11c1d4(0x171)]='none',document['getElementsByClassName'](_0x11c1d4(0x172))[0x0][_0x11c1d4(0x14b)](_0x11c1d4(0x11a))[0x2]['style'][_0x11c1d4(0x171)]=_0x11c1d4(0x12f);for(i=0x0;i<listHide2['length'];i++){document[_0x11c1d4(0x15f)](listHide2[i])[_0x11c1d4(0x15e)]['display']=_0x11c1d4(0x12f);}for(i=0x0;i<hideTableList[_0x11c1d4(0x162)];i++){document[_0x11c1d4(0x15f)](_0x11c1d4(0x152))[_0x11c1d4(0x164)]('tr')[hideTableList[i]][_0x11c1d4(0x15e)]['display']=_0x11c1d4(0x12f);}for(i=0x0;i<hideTableList1[_0x11c1d4(0x162)];i++){document[_0x11c1d4(0x14b)](_0x11c1d4(0x12b))[0x0][_0x11c1d4(0x164)]('tr')[hideTableList1[i]][_0x11c1d4(0x15e)][_0x11c1d4(0x171)]='none';}}else{if(location[_0x11c1d4(0x136)]==(_0x11c1d4(0x144)||'/dce47/Modules/CalculationResultDetails.aspx')){console['log']('Billing\x20Page!');var pl=[_0x11c1d4(0x13c),_0x11c1d4(0x163),_0x11c1d4(0x124),_0x11c1d4(0x160),_0x11c1d4(0x153),_0x11c1d4(0x16f)];if(document[_0x11c1d4(0x15f)](_0x11c1d4(0x137))[_0x11c1d4(0x109)]!=0x64){document[_0x11c1d4(0x15f)](_0x11c1d4(0x137))['value']=0x64;_0x181b99:setTimeout('__doPostBack(\x27ctl00$cp2$gridCalculatedVariables$ctl18$ddlPageSize\x27,\x27\x27)',0x0);var it=setInterval(function(){var _0x497b64=_0x11c1d4;if(document[_0x497b64(0x15f)](_0x497b64(0x166))[_0x497b64(0x117)][0x54][_0x497b64(0x15e)][_0x497b64(0x171)]!=_0x497b64(0x12f))for(i=0x1;i<0x55;i++){var _0x12f5da=document['getElementById'](_0x497b64(0x166))[_0x497b64(0x117)][i];_0x12f5da['cells'][0x1][_0x497b64(0x112)]!=undefined&&(pl['includes'](_0x12f5da['cells'][0x1][_0x497b64(0x112)])==![]&&(_0x12f5da[_0x497b64(0x15e)][_0x497b64(0x171)]=_0x497b64(0x12f)));}},0x1f4);}}}}function NtW(){var _0x313234=_0x11c1d4,_0x43e251=document['getElementById']('cp2_upShipInfoTab')[_0x313234(0x164)]('div')[0x0],_0x511adb=document[_0x313234(0x120)](_0x313234(0x16d));_0x511adb['setAttribute']('id',_0x313234(0x157)),_0x511adb[_0x313234(0x131)]('class',_0x313234(0x165)),_0x43e251[_0x313234(0x13f)](_0x511adb);var _0xf7134c=_0x43e251[_0x313234(0x14b)]('clear')[0x0];_0xf7134c['remove']();var _0x6620fc=document[_0x313234(0x120)](_0x313234(0x16d));_0x6620fc['setAttribute']('id',_0x313234(0x12e)),document['getElementById']('cstmzNet')[_0x313234(0x13f)](_0x6620fc);var _0xfa1429=document[_0x313234(0x120)]('label');_0xfa1429['setAttribute'](_0x313234(0x132),_0x313234(0x159)),_0xfa1429[_0x313234(0x13a)]=_0x313234(0x16b),document[_0x313234(0x15f)](_0x313234(0x12e))['appendChild'](_0xfa1429);var _0x2ed0f4=document[_0x313234(0x120)](_0x313234(0x125));_0x2ed0f4[_0x313234(0x131)]('id',_0x313234(0x159)),_0x2ed0f4['setAttribute']('type',_0x313234(0x14c)),_0x2ed0f4[_0x313234(0x131)](_0x313234(0x155),_0x313234(0x155)),_0x2ed0f4[_0x313234(0x131)](_0x313234(0x15b),_0x313234(0x10f)),_0x2ed0f4['setAttribute']('style','text-align:\x20center;'),document[_0x313234(0x15f)](_0x313234(0x12e))[_0x313234(0x13f)](_0x2ed0f4);var _0x172b87=document[_0x313234(0x120)](_0x313234(0x16d));_0x172b87[_0x313234(0x131)]('id',_0x313234(0x15c)),document[_0x313234(0x15f)](_0x313234(0x157))[_0x313234(0x13f)](_0x172b87);var _0x14a534=document[_0x313234(0x120)]('label');_0x14a534[_0x313234(0x131)]('for',_0x313234(0x14d)),_0x14a534[_0x313234(0x13a)]=_0x313234(0x149),document[_0x313234(0x15f)](_0x313234(0x15c))[_0x313234(0x13f)](_0x14a534);var _0x52ea14=document['createElement']('input');_0x52ea14[_0x313234(0x131)]('id',_0x313234(0x14d)),_0x52ea14['setAttribute'](_0x313234(0x11f),_0x313234(0x14c)),_0x52ea14['setAttribute'](_0x313234(0x155),_0x313234(0x155)),_0x52ea14[_0x313234(0x131)](_0x313234(0x15b),'ui-input-field\x20amount'),_0x52ea14['setAttribute'](_0x313234(0x15e),'text-align:\x20center;'),document['getElementById'](_0x313234(0x15c))[_0x313234(0x13f)](_0x52ea14);var _0x4e9d7b=document[_0x313234(0x120)]('div');_0x4e9d7b[_0x313234(0x131)]('class',_0x313234(0x16a)),_0x43e251[_0x313234(0x13f)](_0x4e9d7b);var _0x5049db=0x0,_0xe4a318=0x0,_0x4bf108=document[_0x313234(0x15f)]('cp2_txtShipmentInfoGrsWt')[_0x313234(0x109)],_0x59b7dd=document[_0x313234(0x15f)](_0x313234(0x11d))['getElementsByTagName']('tr')[_0x313234(0x162)];for(var _0x1ebe58=0x1;_0x1ebe58<_0x59b7dd;_0x1ebe58++){_0x5049db+=parseInt(document[_0x313234(0x15f)](_0x313234(0x11d))[_0x313234(0x117)][_0x1ebe58]['cells'][0xf][_0x313234(0x112)]),_0xe4a318+=parseInt(document[_0x313234(0x15f)](_0x313234(0x11d))[_0x313234(0x117)][_0x1ebe58][_0x313234(0x12a)][0x8][_0x313234(0x112)]);}var _0x188da0=_0x4bf108-_0x5049db;document[_0x313234(0x15f)](_0x313234(0x159))['value']=_0x188da0,document['getElementById'](_0x313234(0x14d))['value']=_0xe4a318,document['getElementById'](_0x313234(0x114))[_0x313234(0x16c)]('change',function(){var _0x527995=_0x313234,_0x4dce85=0x0,_0x4569ac=document[_0x527995(0x15f)](_0x527995(0x114))['value'],_0x39db98=document[_0x527995(0x15f)](_0x527995(0x11d))[_0x527995(0x164)]('tr')[_0x527995(0x162)];for(var _0x1f28da=0x1;_0x1f28da<_0x39db98;_0x1f28da++){_0x4dce85+=parseInt(document['getElementById'](_0x527995(0x11d))[_0x527995(0x117)][_0x1f28da][_0x527995(0x12a)][0xf][_0x527995(0x112)]);}var _0x55cc76=_0x4569ac-_0x4dce85;document[_0x527995(0x15f)]('txtInputWt')[_0x527995(0x109)]=_0x55cc76;});}
