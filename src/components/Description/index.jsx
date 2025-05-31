import './style.css'
import Ad from '../Ads'


function Description() {
	return (
		<div>
			<section className="description">
				<h2>why choose hardis and dromedas</h2>
				<em>Choose us for the ultimate standout</em>
				<div className="wrap">
					<div className="texts">
						<div className="card">
							<h3>premium skincare products</h3>
							<p>Enhance your natural beauty wirh premium skincare solutions from Hardis. Our expertly crafted products are designed to nourish, protect and rejuvenate your skin, ensurin a radiant,healthy glow. <br />Shop now and elevate your skincare routine with our trusted, high quality offerings.</p>
						</div>
						<div className="card">
							<h3>premium cleaning products</h3>
							<p>Transform your space with premium cleaning solutions from Hardis. Our effective and eco-friendly products ensure a spotless hygenic environment, protecting your family and planet. <br /> Shop now for top quality products that make maintaining a clean home effortless and safe</p>
						</div>
						<div className="card">
							<h3>partnership</h3>
							<p>Partner with hardis to offer your customers the best in skincare and cleaning products. Our high quality eco-friendly solutions are a perfect addition to your store, ensuring satisfaction and loyalty. Join us in delivering excellence and enhancing lives. <br />
							Contact us today to explore partnership opportunities.</p>
						</div>
						
					</div>
					
				</div>
			</section>
			
			<Ad />
			
		</div>
	)
}

export default Description;