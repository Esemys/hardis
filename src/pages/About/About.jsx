import react from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar';
import Ad from '../../components/Ads';
import Description from '../../components/Description';
import Footer from '../../components/Footer';
import './style.css'


function About() {
  return (
	<div>
	<NavBar />
	

	<div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', margin: '32px 0', top: "90px", position: 'relative'

	 }}>
		{/* generate the history of hardis , acheivements. list of products with link to ids */}
		<div className="about-section">
			<div className="about-history-card">
				<h2>Our History</h2>
				<p>
					Hardis Manufacturing Company was established in 1987 by Dr. Chike Obidigbo (JP) with a vision to drive industrial growth and innovation in Nigeria. Starting as a small-scale operation, Hardis has grown into a leading manufacturer, renowned for its commitment to quality and community development. Over the decades, the company has expanded its product lines and built a reputation for excellence across Africa.
				</p>
			</div>
			<div className="about-founder-card">
				<h2>About the Founder</h2>
				<p>
					Dr. Chike Obidigbo (JP) is a visionary entrepreneur and philanthropist. With a passion for industrialization and sustainable development, he has led Hardis Manufacturing Company to become a benchmark for quality and innovation in the manufacturing sector. His leadership and dedication to ethical business practices have earned him numerous accolades.
				</p>
			</div>
			<div className="about-achievements-card">
				<h2>Achievements</h2>
				<ul>
					<li>Over 30 years of continuous operation and growth</li>
					<li>Recipient of multiple national and regional manufacturing awards</li>
					<li>ISO-certified production processes</li>
					<li>Significant contributions to local employment and community development</li>
					<li>Exporting products to several African countries</li>
				</ul>
			</div>
			<div className="about-products-card">
				<h2>Our Products</h2>
				<ul>
					<li>
						<Link to="/products/1">Hardis Disinfectant</Link>
					</li>
					<li>
						<Link to="/products/2">Hardis Liquid Soap</Link>
					</li>
					<li>
						<Link to="/products/3">Hardis Bleach</Link>
					</li>
					<li>
						<Link to="/products/4">Hardis Air Freshener</Link>
					</li>
					<li>
						<Link to="/products/5">Hardis Detergent Powder</Link>
					</li>
				</ul>
			</div>
		</div>
	</div>

	{/* Mission, Core Values, Vision */}
	<div className='card-container'>
		{/* Mission */}
		<div className='cards'>
			<h3>Our Mission</h3>
			<p>
				To deliver high-quality products that improve lives, foster innovation, and contribute to the sustainable development of our communities.
			</p>
		</div>
		
		{/* Vision */}
		<div className='cards'>
			<h3>Our Vision</h3>
			<p>
				To be the leading manufacturing company in Africa, setting benchmarks in quality, innovation, and corporate responsibility.
			</p>
		</div>

		{/* Core Values */}
		<div className='cards'>
			<h3>Core Values</h3>
			<ul>
				<li>Integrity</li>
				<li>Innovation</li>
				<li>Quality</li>
				<li>Customer Focus</li>
				<li>Teamwork</li>
			</ul>
		</div>
	</div>


	<section className="team-section">
				
				<div className="team-grid">
					{[
						{
							img: 'https://randomuser.me/api/portraits/men/1.jpg',
							name: 'Dr Chike Obidigbo (JP)',
							title: 'Chairman',
						},
						{
							img: 'https://randomuser.me/api/portraits/women/2.jpg',
							name: 'Mrs Obieze',
							title: 'General Manager',
						},
						{
							img: 'https://randomuser.me/api/portraits/men/3.jpg',
							name: 'Senior Shedrack',
							title: 'Auditor',
						},
						{
							img: 'https://randomuser.me/api/portraits/men/4.jpg',
							name: 'Mr Emmanuel Obidigbo',
							title: 'Building & Maintenance Manager',
						},
						{
							img: 'https://randomuser.me/api/portraits/women/5.jpg',
							name: 'Miss Nnenna Odoh',
							title: 'Production Manager',
						},
						{
							img: 'https://randomuser.me/api/portraits/men/6.jpg',
							name: 'Engineer David Igwe',
							title: 'Lead Engineer',
						},
						
						
						
						{
							img: 'https://randomuser.me/api/portraits/men/12.jpg',
							name: 'Pastor Nick',
							title: 'Procurement Manager',
						},
						
						
					].map((member, idx) => (
						<div className="team-card" key={idx}>
							<img src={member.img} alt={member.name} className="team-img" />
							<h4>{member.name}</h4>
							<p>{member.title}</p>
						</div>
					))}
				</div>
			</section>

	
	<Ad />
	<Footer />
	</div>
  );
}
export default About;