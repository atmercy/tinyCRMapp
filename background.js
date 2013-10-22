chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('case.html', {
		// Fit this to the form size, as needed
		bounds: {
			width: 675,
			height: 650
		},
		resizable: false,
	});
});
