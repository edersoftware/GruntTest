sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ch.bielbienne.gruntGruntTest.controller.View1", {
		
		OnSayHello : function(){
			var eineErsteVariable = "Hallo";
			var eineZweiteVariable = "Welt";
		    var dasResultat = eineErsteVariable + " " + eineZweiteVariable;
		    
		    alert(dasResultat);
		}

	});
});