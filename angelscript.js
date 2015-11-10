var whichPaypal;
var timer1;
var timer2;
var timer3;
var timer4;
var timer5;

function clearTimers()
{
clearTimeout(timer1);
clearTimeout(timer2);
clearTimeout(timer3);
clearTimeout(timer4);
clearTimeout(timer5);
}

function startCountdown(chosenPaypal)
{
	whichPaypal=chosenPaypal;
	timer1=setTimeout(counttofour, 2000);
	timer2=setTimeout(counttothree, 4000);
	timer3=setTimeout(counttotwo, 6000);
	timer4=setTimeout(counttoone, 8000);
	timer5=setTimeout(GoToURL, 9000);
}



function GoToURL()
{
	if (whichPaypal=="P2") {
		document.getElementById("p2form").submit();
	}
	if (whichPaypal=="P3") {
		document.getElementById("p3form").submit();
	}
	if (whichPaypal=="Inspire") {
		document.getElementById("inspireform").submit();
	}	
}


function counttofour()
{
	if (whichPaypal=="P2") {
		document.getElementById('countdownp2').innerHTML = "4";
	}
	if (whichPaypal=="P3") {
		document.getElementById('countdownp3').innerHTML = "4";
	}
	if (whichPaypal=="Inspire") {
		document.getElementById('countdownInspire').innerHTML = "4";
	}
}
function counttothree()
{
	if (whichPaypal=="P2") {
		document.getElementById('countdownp2').innerHTML = "3";
	}
	if (whichPaypal=="P3") {
		document.getElementById('countdownp3').innerHTML = "3";
	}
		if (whichPaypal=="Inspire") {
		document.getElementById('countdownInspire').innerHTML = "3";
	}
}
function counttotwo()
{
	if (whichPaypal=="P2") {
		document.getElementById('countdownp2').innerHTML = "2";
	}
	if (whichPaypal=="P3") {
		document.getElementById('countdownp3').innerHTML = "2";
	}
		if (whichPaypal=="Inspire") {
		document.getElementById('countdownInspire').innerHTML = "2";
	}
}
function counttoone()
{
	if (whichPaypal=="P2") {
		document.getElementById('countdownp2').innerHTML = "1";
	}
	if (whichPaypal=="P3") {
		document.getElementById('countdownp3').innerHTML = "1";
	}
		if (whichPaypal=="Inspire") {
		document.getElementById('countdownInspire').innerHTML = "1";
	}
}