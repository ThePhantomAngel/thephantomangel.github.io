function triggerbox() {
document.getElementById('lightbox').style.opacity='1';
document.getElementById('lightbox').style.visibility='visible';
document.getElementById('thex').style.opacity='1';
document.getElementById('thex').style.visibility='visible';
document.getElementById('fade').style.opacity='0.8';
document.getElementById('fade').style.display='block';
}

function closelightbox() {
document.getElementById('lightbox').style.opacity='0';
document.getElementById('lightbox').style.visibility='hidden';
document.getElementById('thex').style.opacity='0';
document.getElementById('thex').style.visibility='hidden';
document.getElementById('fade').style.opacity='0';
document.getElementById('fade').style.display='none';
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var updateCurrencies = function() {
	//Euros
	var inspireprice = '€43.99'
	document.getElementById('inspireprice').innerHTML=inspireprice;
	document.getElementById('phantom3price').innerHTML='€36.99 (pre-order)';
	document.getElementById('phantom23price').innerHTML='€38.99 (pre-order)';
	document.getElementById('postageprice').innerHTML='€4.5';
	document.getElementById('postageprice').innerHTML='€4.5';
	document.getElementById('inspirepriceintext').innerHTML='€4.5';
};