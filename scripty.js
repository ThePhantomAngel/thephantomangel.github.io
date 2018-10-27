function trackBuyNow()
{
	fbq('track', 'Lead');
	gtag('event', 'ClickedBuyNow', {
	  'event_category': 'ClickedBuyNow',
	  'event_label': 'ClickedBuyNow'
	});
}

function trackPaymentClick()
{
	gtag('event', 'ClickedToPay', {
	  'event_category': 'ClickedToPay',
	  'event_label': 'ClickedToPay'
	});
}

function startedTyping() {
	if (document.getElementById('combochoice').value!="") {
		console.log('hasvalue');
		document.getElementById('comboform').action = 'https://wt-b809e76a147c10b17bc1c6ea6f6d8d6c-0.sandbox.auth0-extend.com/thisistheone/payment?description=' + encodeURIComponent(document.getElementById('combochoice').value);
	}
}

