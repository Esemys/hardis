import './style.css'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
	return (
		<div>
			<footer className="footer">
				<div className="footer-container">
					<h3>Hardis & Dromedas Ltd</h3>
					<i>manufacturers of quality hygiene products for everyone</i>
					<p>+2349033561947</p>
					<address>Km 19 Onitsha Enugu Expressway, Umunya, Nigeria.</address>
				</div>
				
				<div className="socials">
					<a href="https://www.facebook.com/hardisdromedas" target="_blank" rel="noreferrer"><FaFacebook/></a>
					<a href="https://www.instagram.com/hardisdromedas/" target="_blank" rel="noreferrer"><FaInstagram/></a>
					<a href="https://twitter.com/hardisdromedas" target="_blank" rel="noreferrer"><FaTwitter/></a>
					<a href="https://www.linkedin.com/company/hardisdromedas/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
					<a href="https://www.tiktok.com/@hardisdromedas" target="_blank" rel="noreferrer"><FaTiktok/></a>
					<a href="https://www.youtube.com/@hardisdromedas" target="_blank" rel="noreferrer"><FaYoutube/></a>
				</div>
				<div className="copyright">
					<p>Copyright &copy; {new Date().getFullYear()}</p>
					<p>All rights reserved</p>
					
				</div>
				{/*<div className="policy">
					<Link to="/privacy-policy">Privacy Policy</Link> |
					<Link to="/terms-and-conditions">T&C</Link> |
					<Link to="/cookies">Cookies policy</Link>
				</div>*/}
			</footer>
		</div>
)
}

export default Footer