
import './App.css';
import BackgroundBanner from './Components/Pages/Home/BackgroundBanner';
import Banner from './Components/Pages/Home/Banner';
import Deals from './Components/Pages/Home/Deals';
import Discount from './Components/Pages/Home/Discount';
import Offer from './Components/Pages/Home/Offer';
import Product from './Components/Pages/Home/Product';
import Shop from './Components/Pages/Home/Shop';
import Testimonials from './Components/Pages/Home/Testimonials';
import Footer from './Components/Pages/Shared/Footer';
import Navbar from './Components/Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Discount/>
        <Banner/>
        <Product/>
        <Deals/>
        <Offer/>
        <BackgroundBanner/>
        <Shop/>
        <Testimonials/>
        <Footer/>
    </div>
  );
}

export default App;
