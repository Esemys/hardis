import './style.css'
import {Link} from 'react-router-dom'

function Header() {
	return (
		<div>
			<header className='header-container'>
				<h1>discover your radiant beauty at hardis and dromedas</h1>
				<h4>experience the ultimate clean and bacteria-free environment at hardis and dromedas</h4>
				<Link style={{ textDecoration: "none"}} to="/products"  className="btn1">place an order</Link >
				
			</header>
			
		</div>
	)
}

export default Header;