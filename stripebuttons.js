function checkout(pricecode)
{
	var stripe = Stripe('pk_live_xX2K7YSyzJxNwrbjAQ9YKDJO');
	stripe.redirectToCheckout(
		{
			lineItems: [{price: pricecode, quantity: 1}],
			mode: 'payment',
			successUrl: 'https://phantomangel.rocks/success',
			cancelUrl: 'https://phantomangel.rocks/buynowpage',
		}
	)
	.then(function (result) 
	{
		if (result.error) 
		{
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer.
			var displayError = document.getElementById('error-message');
			displayError.textContent = result.error.message;
		}
	})
}

