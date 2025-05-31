import react from 'react';
import NavBar from '../../components/NavBar';
import Ad from '../../components/Ads';
import Description from '../../components/Description';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TextAd from '../../components/TextAd';


function Home() {
	return (
		<>
			<NavBar />
			<Header />
			<Ad />
			<Description />
			<TextAd />
			
			<Footer />
		</>
	);
}
export default Home;