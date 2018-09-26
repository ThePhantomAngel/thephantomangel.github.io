function trackBuyNow()
{
fbq('track', 'Lead');
}
function trackPaypalClick()
{
fbq('track', 'AddToCart');
ga('send', 'event', 'Paypal', 'Paypal', 'Paypal');
}