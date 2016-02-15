function triggerbox() {
document.getElementById('lightbox').style.opacity='1';
document.getElementById('lightbox').style.visibility='visible';
document.getElementById('thex').style.opacity='1';
document.getElementById('thex').style.visibility='visible';
document.getElementById('fade').style.opacity='0.8';
document.getElementById('fade').style.display='block';
console.log("Welcome to our visitors from "+geoplugin_city()+", "+geoplugin_countryName()); 
}

function closelightbox() {
document.getElementById('lightbox').style.opacity='0';
document.getElementById('lightbox').style.visibility='hidden';
document.getElementById('thex').style.opacity='0';
document.getElementById('thex').style.visibility='hidden';
document.getElementById('fade').style.opacity='0';
document.getElementById('fade').style.display='none';
}


