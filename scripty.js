function trackBuyNow()
{
fbq('track', 'Lead');
}
function trackPaypalClick()
{
ga('send', 'event', 'Paypal', 'Paypal', 'Paypal');
}