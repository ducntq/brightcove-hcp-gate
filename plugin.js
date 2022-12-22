var myPlayer, eAgeGateButton;
var myPlayer = this;
videojs.getAllPlayers().forEach((player) => {
	player.ready(function() {
		// Get a reference to the player when it is ready
		myPlayer = this;
		// Add the class which hides the player controls and the big play button
		var gatekeeper = document.createElement('div');
		gatekeeper.classList.add('vjs-overlay');
		gatekeeper.style.width = "100%";
		gatekeeper.style.height = "100%";
		gatekeeper.style.color = "#333333";
		gatekeeper.style.background = "#ffffff";
		gatekeeper.style.left = 0;
		gatekeeper.style.top = 0;
		gatekeeper.style.opacity = "0.7";
		gatekeeper.style.fontSize = "26px";
		myPlayer.prepend(gatekeeper);

		// +++ Set up listening for when the user clicks the age verification text +++
		// Listen for when the player has initial duration and dimension information
		console.log('running');
		myPlayer.on("loadedmetadata", function() {
			/*
			// Get a reference to the age verification text in the overlay
			eAgeGateButton = document.getElementById("ageGateButton");
			eAgeGateButton.innerHTML = 'By clicking the button, you certify that you are a certified HCP.';
			//
			// Listen for age verification text click events
			eAgeGateButton.addEventListener("click", function() {
				// Remove the class which hides the player controls and the big play button
				myPlayer.removeClass("video-agelist");
				// Start video playback
				myPlayer.play();
			});
			*/
		});
	});
});
