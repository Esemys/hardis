import React from 'react';
import './style.css';



function TextAd () {
	const whatsappLink = "https://wa.me/2349033561947?text=I%20want%20to%20become%20a%20distributor";
	const adClick = () => {
		window.open(whatsappLink, "_blank");
		window.location.href = whatsappLink; // Fallback for browsers that don't support target="_blank"
		console.log("Ad clicked, redirecting to WhatsApp");
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': 'adClick',
			'adType': 'textAd',
			'adContent': 'Become a distributor. Tel: 09033561947'
		});
		window.gtag('event', 'ad_click', {
			'event_category': 'text_ad',
			'event_label': 'Become a distributor. Tel: 09033561947'
		});
		window.fbq('track', 'AdClick', {
			content_name: 'Become a distributor. Tel: 09033561947',
			content_category: 'text_ad'
		});
		window.ga('send', 'event', 'text_ad', 'click', 'Become a distributor. Tel: 09033561947');
		window.pendo.track('Ad Clicked', {
			adType: 'textAd',
			adContent: 'Become a distributor. Tel: 09033561947'
		});
};
	return (
		<a style={{textDecoration:"none"}} href={whatsappLink} target="_blank" rel="noopener noreferrer">
			<div  className="text-ad-wrapper">
				<div onClick={adClick} className="text-ad">
					<span >become a distributor. tel: 09033561947</span>
					<span>become a distributor. tel: 09033561947</span>
					<span>become a distributor. tel: 09033561947</span>
					
				</div>
			</div>
		</a>
	) 
};

export default TextAd