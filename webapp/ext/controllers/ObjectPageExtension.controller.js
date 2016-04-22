sap.ui.controller("com.st.demo.ext.controllers.ObjectPageExtension", {
	onObjectPageCustomAction: function() {
		sap.m.MessageBox.success("Hello from ObjectPage custom action!", {});
	}
});