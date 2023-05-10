var zoomLevel = 100; // set initial zoom level to 100%

document.getElementById("zoom-in-button").addEventListener("click", function() {
  zoomLevel += 10; // increase zoom level by 10%
  document.body.style.zoom = zoomLevel + "%";
});

document.getElementById("zoom-out-button").addEventListener("click", function() {
  zoomLevel -= 10; // decrease zoom level by 10%
  document.body.style.zoom = zoomLevel + "%";
});
