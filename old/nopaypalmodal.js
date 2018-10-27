// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function openmodal() {
var modal = document.getElementById('myModal');	
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closemodal() {
	var modal = document.getElementById('myModal');	
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	var modal = document.getElementById('myModal');	
    if (event.target == modal) {
        modal.style.display = "none";
    }
}