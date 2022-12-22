var myPlayer, eAgeGateButton;
var myPlayer = this;
videojs.getAllPlayers().forEach((player) => {
player.ready(function() {
    // Get a reference to the player when it is ready
    myPlayer = this;
    // Add the class which hides the player controls and the big play button
    myPlayer.addClass("video-gatekeeper");
    var overlay = document.getElementsByClassName("vjs-overlay");
    overlay.item(0).style.width = "100%";
    overlay.item(0).style.height = "100%";
    overlay.item(0).style.color = "#333333";
    overlay.item(0).style.background = "#ffffff";
    overlay.item(0).style.left = 0;
    overlay.item(0).style.top = 0;
    overlay.item(0).style.opacity = "0.7";
    overlay.item(0).style.fontSize = "26px";

    // +++ Set up listening for when the user clicks the age verification text +++
    // Listen for when the player has initial duration and dimension information
    myPlayer.on("loadedmetadata", function() {
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
    });
});
});
});
