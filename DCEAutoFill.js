// ==UserScript==
// @name DCE AutoFill
// @namespace Ali AlMubarak @ +966581604111 | contact.alawy@gmail.com
// @version 1.7.2
// @description This script to auto select items, remove not required to fill it.
// @include https://dcesa2.dhl.com/*
// @downloadURL https://github.com/i3lawy/DHLPRSCRIPT/raw/main/DCEAutoFill.js
// @updateURL   https://github.com/i3lawy/DHLPRSCRIPT/raw/main/DCEAutoFill.js
// @grant none
// ==/UserScript==
var _0x19b8=['rows','/dce47/Modules/LineItemDetails.aspx','cp2_ConsigneeContactFirstName','cp2_LineItemUOM4','cp2_ddlShipmentInfoIncoterms','cp2_ConsigneeBuildingName','cp2_gvLineItems','txtInputWt','getElementById','grid_1\x20alpha\x20omega\x20col2','1037696XTdhwd','input','cp2_ConsigneeEmailAddress','txtInputQt','label','txtQt','cp2_txtConsigneeInfoEnglishAddress3','48038olXPkl','cp2_ConsigneeCustomsReference','clear','202187vXarLm','/dce47/Modules/CalculationResultDetails.aspx','cp2_LineItemQty4','cp2_ConsigneeAddressLine1Local','DUTY','cp2_txtNetWeight','951bhqwdb','change','266104ppSCpG','/dce47/Modules/ShipmentDetails.aspx','createElement','cp2_ConsigneeContactFirstNameLocal','499rLHLpw','cp2_LineItemQty3','length','cp2_txtShipmentInfoGrsWt','appendChild','cp2_ConsigneeStreetNumber','CIF','cp2_ConsigneeMobileNumber','cp2_txtConsigneeInfoEnglishPostal','TAX','cp2_txtShipmentInfoArr','style','for','323697mavMEV','cp2_ConsigneeState','cp2_upShipInfoTab','cp2_LineItemQty6','PKA','4862sMGbfI','cp2_txtConsigneeInfoEnglishPhone','cells','log','GridViewTextFields','cstmzNet','txtNt','getElementsByTagName','display','value','32gjfzmc','__doPostBack(\x27ctl00$cp2$gridCalculatedVariables$ctl18$ddlPageSize\x27,\x27\x27)','OTHERCHARGE','cp2_txtShipmentInfoMan','cp2_LineItemQty2','grid_8\x20omega','2fEXFPR','innerHTML','cp2_ConsigneeAddressLine2Local','cp2_ConsigneeContactNationality','cp2_ConsigneeFaxNumberLocal','cp2_ConsigneeContactName','cp2_ConsigneeDistrictName','addEventListener','fieldset-section','cp2_LineItemQty8','readonly','getElementsByClassName','cp2_ConsigneeStreetName','text','grid_8\x20alpha','faloqili','none','Net\x20Qt','setAttribute','ui-input-field\x20amount','cp2_ddlShipmentInfoPkgType','cp2_ConsigneeMobileNumberLocal','type','cp2_gvLineItemCustomFields_txtCustomFieldValue_1','cp2_LineItemQty7','cp2_ConsigneeRelatedShipper','class','text-align:\x20center;','cp2_ConsigneeStateLocal','Details','cp2_ConsigneeUserDefinedFields','cp2_txtShipmentInfoSD','cp2_gridCalculatedVariables','cp2_ConsigneeTelephoneNumberLocal','cp2_ConsigneeCustomsID','pathname','cp2_txtConsigneeInfoEnglishAddress2','cp2_LineItemUOM7','Net\x20Wt','cp2_ConsigneeInstructions','cp2_gridCalculatedVariables_ddlPageSize','alalmuba','lblUsername','div','cp2_LineItemUOM2','innerText'];function _0x3d8d(_0x11f058,_0x2af099){return _0x3d8d=function(_0x19b851,_0x3d8d2a){_0x19b851=_0x19b851-0x1e5;var _0x89206b=_0x19b8[_0x19b851];return _0x89206b;},_0x3d8d(_0x11f058,_0x2af099);}var _0x474a30=_0x3d8d;(function(_0x28356a,_0x504366){var _0x437a1f=_0x3d8d;while(!![]){try{var _0x56f1d1=parseInt(_0x437a1f(0x239))*parseInt(_0x437a1f(0x1fa))+parseInt(_0x437a1f(0x244))+-parseInt(_0x437a1f(0x248))*parseInt(_0x437a1f(0x242))+-parseInt(_0x437a1f(0x1ea))*parseInt(_0x437a1f(0x1f4))+-parseInt(_0x437a1f(0x1e5))+-parseInt(_0x437a1f(0x23c))+parseInt(_0x437a1f(0x232));if(_0x56f1d1===_0x504366)break;else _0x28356a['push'](_0x28356a['shift']());}catch(_0x392b6d){_0x28356a['push'](_0x28356a['shift']());}}}(_0x19b8,0x3b893));var sn=['aalangri',_0x474a30(0x223),_0x474a30(0x209)];for(let i=0x0;i<sn[_0x474a30(0x24a)];i++){if(document[_0x474a30(0x230)](_0x474a30(0x224))[_0x474a30(0x227)]==sn[i])console['log']('Username:\x20'+sn[i]),appr();else continue;}function appr(){var _0x39e6ac=_0x474a30;if(location[_0x39e6ac(0x21d)]==_0x39e6ac(0x245)){var _0x3e944c=document[_0x39e6ac(0x230)](_0x39e6ac(0x22c)),_0x3d2446=document['getElementById'](_0x39e6ac(0x20e)),_0x59d997=document[_0x39e6ac(0x230)](_0x39e6ac(0x250)),_0x15f6de=document[_0x39e6ac(0x230)](_0x39e6ac(0x1eb)),_0x4226d8=document['getElementById']('cp2_txtConsigneeInfoEnglishAddress1'),_0x5319e2=document[_0x39e6ac(0x230)](_0x39e6ac(0x21e)),_0x15da91=document[_0x39e6ac(0x230)](_0x39e6ac(0x238)),_0x1fb4f2=[_0x39e6ac(0x22a),'cp2_ConsigneeState',_0x39e6ac(0x1fd),_0x39e6ac(0x24f),'cp2_ConsigneeFloor',_0x39e6ac(0x24d),_0x39e6ac(0x200),_0x39e6ac(0x1e6),'cp2_ConsigneeContactLastName','cp2_ConsigneeContactLanguageCode','cp2_ConsigneeFaxNumber',_0x39e6ac(0x234),_0x39e6ac(0x22d),_0x39e6ac(0x206),_0x39e6ac(0x1ff),_0x39e6ac(0x23f),_0x39e6ac(0x1fc),'cp2_ConsigneeAddressLine3Local','cp2_ConsigneeCityLocal','cp2_ConsigneeContactNameLocal',_0x39e6ac(0x21b),_0x39e6ac(0x20f),_0x39e6ac(0x247),'cp2_ConsigneeContactNationalityLocal',_0x39e6ac(0x216),'cp2_ConsigneeCountryLocal',_0x39e6ac(0x1fe),'cp2_ConsigneeEmailAddressLocal','cp2_ConsigneeContactLastNameLocal',_0x39e6ac(0x21c),_0x39e6ac(0x23a),'cp2_ConsigneeRoleType',_0x39e6ac(0x221),'cp2_pnlConsigneeBrokerDetails','cp2_ConsigneeImporterID',_0x39e6ac(0x213),_0x39e6ac(0x218)];setInterval(_0x2725f5(),0xbb8);for(var _0x1ef7ae=0x0;_0x1ef7ae<_0x1fb4f2[_0x39e6ac(0x24a)];_0x1ef7ae++){document[_0x39e6ac(0x230)](_0x1fb4f2[_0x1ef7ae])['style']['display']=_0x39e6ac(0x20a);}if(document[_0x39e6ac(0x230)](_0x39e6ac(0x219))[_0x39e6ac(0x1f3)]==document[_0x39e6ac(0x230)](_0x39e6ac(0x1f7))[_0x39e6ac(0x1f3)]==document[_0x39e6ac(0x230)](_0x39e6ac(0x252))[_0x39e6ac(0x1f3)]==!![])return;(_0x59d997[_0x39e6ac(0x1f3)]==null||_0x59d997[_0x39e6ac(0x1f3)]!==0x2711)&&(_0x59d997[_0x39e6ac(0x1f3)]=0x2711),(_0x15f6de[_0x39e6ac(0x1f3)]==null||_0x15f6de['value']['length']!==0x9)&&(_0x15f6de['value']=0x75bcd15),_0x3e944c[_0x39e6ac(0x1f3)]!==_0x39e6ac(0x24e)&&(_0x3e944c[_0x39e6ac(0x1f3)]=_0x39e6ac(0x24e)),_0x3d2446['value']!==_0x39e6ac(0x1e9)&&(_0x3d2446[_0x39e6ac(0x1f3)]=_0x39e6ac(0x1e9));}else{if(location[_0x39e6ac(0x21d)]==_0x39e6ac(0x229)){var _0x1fb4f2=[_0x39e6ac(0x226),'cp2_LineItemUOM3',_0x39e6ac(0x22b),'cp2_LineItemUOM5','cp2_LineItemUOM6',_0x39e6ac(0x21f),'cp2_LineItemUOM8',_0x39e6ac(0x1f8),_0x39e6ac(0x249),_0x39e6ac(0x23e),'cp2_LineItemQty5',_0x39e6ac(0x1e8),_0x39e6ac(0x212),_0x39e6ac(0x203)],_0x4bed9f=[0x0,0x3,0x4,0x5],_0x2fbdc9=[0x0,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa],_0xc4c6db=document['getElementById']('cp2_txtInvNum');document[_0x39e6ac(0x230)](_0x39e6ac(0x241))[_0x39e6ac(0x201)](_0x39e6ac(0x243),function(){var _0x3dd563=_0x39e6ac;document[_0x3dd563(0x230)](_0x3dd563(0x211))['value']=document['getElementById'](_0x3dd563(0x241))[_0x3dd563(0x1f3)];});(_0xc4c6db[_0x39e6ac(0x1f3)]!==null||_0xc4c6db[_0x39e6ac(0x1f3)]!=='')&&(_0xc4c6db[_0x39e6ac(0x1f3)]='');document[_0x39e6ac(0x205)](_0x39e6ac(0x1f9))[0x0][_0x39e6ac(0x205)](_0x39e6ac(0x202))[0x0][_0x39e6ac(0x253)]['display']=_0x39e6ac(0x20a),document[_0x39e6ac(0x205)](_0x39e6ac(0x208))[0x0][_0x39e6ac(0x205)](_0x39e6ac(0x202))[0x2][_0x39e6ac(0x253)][_0x39e6ac(0x1f2)]=_0x39e6ac(0x20a);for(var _0x1ef7ae=0x0;_0x1ef7ae<_0x1fb4f2[_0x39e6ac(0x24a)];_0x1ef7ae++){document[_0x39e6ac(0x230)](_0x1fb4f2[_0x1ef7ae])[_0x39e6ac(0x253)][_0x39e6ac(0x1f2)]=_0x39e6ac(0x20a);}for(var _0x1ef7ae=0x0;_0x1ef7ae<_0x4bed9f['length'];_0x1ef7ae++){document[_0x39e6ac(0x230)](_0x39e6ac(0x217))['getElementsByTagName']('tr')[_0x4bed9f[_0x1ef7ae]][_0x39e6ac(0x253)][_0x39e6ac(0x1f2)]=_0x39e6ac(0x20a);}for(var _0x1ef7ae=0x0;_0x1ef7ae<_0x2fbdc9[_0x39e6ac(0x24a)];_0x1ef7ae++){document[_0x39e6ac(0x205)](_0x39e6ac(0x1ee))[0x0][_0x39e6ac(0x1f1)]('tr')[_0x2fbdc9[_0x1ef7ae]]['style']['display']=_0x39e6ac(0x20a);}}else{if(location[_0x39e6ac(0x21d)]==_0x39e6ac(0x23d)){console[_0x39e6ac(0x1ed)]('Billing\x20Page!');var _0x3bb47c=['EDI',_0x39e6ac(0x240),_0x39e6ac(0x251),_0x39e6ac(0x1f6),'OTHERFEESCHARGES','OTHERULESPAPERS'];if(document[_0x39e6ac(0x230)](_0x39e6ac(0x222))['value']!=0x64){document[_0x39e6ac(0x230)](_0x39e6ac(0x222))['value']=0x64;_0x9768ab:setTimeout(_0x39e6ac(0x1f5),0x0);var _0x347ebc=setInterval(function(){var _0x5c7b78=_0x39e6ac;if(document['getElementById'](_0x5c7b78(0x21a))[_0x5c7b78(0x228)][0x54][_0x5c7b78(0x253)][_0x5c7b78(0x1f2)]!='none')for(_0x1ef7ae=0x1;_0x1ef7ae<0x55;_0x1ef7ae++){var _0x53ab27=document['getElementById'](_0x5c7b78(0x21a))[_0x5c7b78(0x228)][_0x1ef7ae];_0x53ab27[_0x5c7b78(0x1ec)][0x1][_0x5c7b78(0x227)]!=undefined&&(_0x3bb47c['includes'](_0x53ab27[_0x5c7b78(0x1ec)][0x1][_0x5c7b78(0x227)])==![]&&(_0x53ab27['style']['display']=_0x5c7b78(0x20a)));}},0x1f4);}}}}function _0x2725f5(){var _0x121548=_0x39e6ac,_0x708482=document[_0x121548(0x230)](_0x121548(0x1e7))[_0x121548(0x1f1)](_0x121548(0x225))[0x0],_0x469c00=document[_0x121548(0x246)](_0x121548(0x225));_0x469c00[_0x121548(0x20c)]('id','cstmzNet'),_0x469c00[_0x121548(0x20c)](_0x121548(0x214),_0x121548(0x231)),_0x708482['appendChild'](_0x469c00);var _0x21e374=_0x708482[_0x121548(0x205)](_0x121548(0x23b))[0x0];_0x21e374['remove']();var _0x5be1c6=document['createElement']('div');_0x5be1c6[_0x121548(0x20c)]('id',_0x121548(0x1f0)),document['getElementById'](_0x121548(0x1ef))[_0x121548(0x24c)](_0x5be1c6);var _0x745df0=document['createElement'](_0x121548(0x236));_0x745df0[_0x121548(0x20c)](_0x121548(0x254),'txtInputWt'),_0x745df0[_0x121548(0x1fb)]=_0x121548(0x220),document[_0x121548(0x230)](_0x121548(0x1f0))[_0x121548(0x24c)](_0x745df0);var _0x346198=document[_0x121548(0x246)](_0x121548(0x233));_0x346198[_0x121548(0x20c)]('id','txtInputWt'),_0x346198[_0x121548(0x20c)](_0x121548(0x210),_0x121548(0x207)),_0x346198['setAttribute'](_0x121548(0x204),_0x121548(0x204)),_0x346198['setAttribute'](_0x121548(0x214),_0x121548(0x20d)),_0x346198[_0x121548(0x20c)]('style',_0x121548(0x215)),document[_0x121548(0x230)](_0x121548(0x1f0))[_0x121548(0x24c)](_0x346198);var _0xf3788e=document[_0x121548(0x246)]('div');_0xf3788e['setAttribute']('id',_0x121548(0x237)),document[_0x121548(0x230)](_0x121548(0x1ef))[_0x121548(0x24c)](_0xf3788e);var _0x4080a9=document[_0x121548(0x246)](_0x121548(0x236));_0x4080a9['setAttribute']('for',_0x121548(0x235)),_0x4080a9['innerHTML']=_0x121548(0x20b),document[_0x121548(0x230)](_0x121548(0x237))[_0x121548(0x24c)](_0x4080a9);var _0x47ef9d=document['createElement'](_0x121548(0x233));_0x47ef9d[_0x121548(0x20c)]('id',_0x121548(0x235)),_0x47ef9d[_0x121548(0x20c)](_0x121548(0x210),_0x121548(0x207)),_0x47ef9d[_0x121548(0x20c)](_0x121548(0x204),_0x121548(0x204)),_0x47ef9d[_0x121548(0x20c)](_0x121548(0x214),_0x121548(0x20d)),_0x47ef9d[_0x121548(0x20c)](_0x121548(0x253),_0x121548(0x215)),document[_0x121548(0x230)](_0x121548(0x237))['appendChild'](_0x47ef9d);var _0x1b8ef7=document['createElement'](_0x121548(0x225));_0x1b8ef7[_0x121548(0x20c)](_0x121548(0x214),_0x121548(0x23b)),_0x708482['appendChild'](_0x1b8ef7);var _0x57dcef=0x0,_0x32cad9=0x0,_0x57b008=document['getElementById']('cp2_txtShipmentInfoGrsWt')[_0x121548(0x1f3)],_0x1ca8ce=document[_0x121548(0x230)]('cp2_gvLineItems')[_0x121548(0x1f1)]('tr')[_0x121548(0x24a)];for(var _0x2fba52=0x1;_0x2fba52<_0x1ca8ce;_0x2fba52++){_0x57dcef+=parseInt(document[_0x121548(0x230)]('cp2_gvLineItems')[_0x121548(0x228)][_0x2fba52][_0x121548(0x1ec)][0xf][_0x121548(0x227)]),_0x32cad9+=parseInt(document[_0x121548(0x230)](_0x121548(0x22e))[_0x121548(0x228)][_0x2fba52][_0x121548(0x1ec)][0x8][_0x121548(0x227)]);}var _0x4aa15f=_0x57b008-_0x57dcef;document[_0x121548(0x230)](_0x121548(0x22f))[_0x121548(0x1f3)]=_0x4aa15f,document[_0x121548(0x230)](_0x121548(0x235))[_0x121548(0x1f3)]=_0x32cad9,document[_0x121548(0x230)]('cp2_txtShipmentInfoGrsWt')[_0x121548(0x201)](_0x121548(0x243),function(){var _0x58887d=_0x121548,_0x130e59=0x0,_0x51f423=document[_0x58887d(0x230)](_0x58887d(0x24b))[_0x58887d(0x1f3)],_0x481e01=document[_0x58887d(0x230)]('cp2_gvLineItems')['getElementsByTagName']('tr')['length'];for(var _0x22b5b3=0x1;_0x22b5b3<_0x481e01;_0x22b5b3++){_0x130e59+=parseInt(document[_0x58887d(0x230)]('cp2_gvLineItems')[_0x58887d(0x228)][_0x22b5b3][_0x58887d(0x1ec)][0xf][_0x58887d(0x227)]);}var _0x1b2cf5=_0x51f423-_0x130e59;document['getElementById'](_0x58887d(0x22f))[_0x58887d(0x1f3)]=_0x1b2cf5;});}}
