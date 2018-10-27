function trackBuyNow()
{
fbq('track', 'Lead');
ga('send', 'event', 'ClickedBuyNow', 'ClickedBuyNow', 'ClickedBuyNow');
}

function trackPaymentClick()
{
	ga('send', 'event', 'ClickedToPay', 'ClickedToPay', 'ClickedToPay');
	console.log("Pressed to pay");
}

function startedTyping() {
	if (document.getElementById('combochoice').value!="") {
		console.log('hasvalue');
		document.getElementById('comboform').action = 'https://wt-b809e76a147c10b17bc1c6ea6f6d8d6c-0.sandbox.auth0-extend.com/thisistheone/payment?description=' + encodeURIComponent(document.getElementById('combochoice').value);
	}
}

