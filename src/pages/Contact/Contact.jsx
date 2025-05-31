import react from 'react';

import NavBar from '../../components/NavBar';

import Footer from '../../components/Footer';
import Header from '../../components/Header';


function Contact() {
  return (
	<div>
	  <NavBar />

	<form
		action="https://hardis-backend.example.com/api/send-review"
		method="POST"
		style={{
			
		}}
	>
		<label>
			Name:
			<input type="text" name="name" required />
		</label>
		<label>
			Email Address:
			<input type="email" name="email" required />
		</label>
		<label>
			Phone Number:
			<input type="tel" name="phone" required />
		</label>
		<label>
			Message:
			<textarea name="message" required rows={5} />
		</label>
		<button type="submit" >
			Submit Review
		</button>
	</form>
	  {/* You can add more components here as needed */}
	  <Footer />
	</div>
  );
}
export default Contact;