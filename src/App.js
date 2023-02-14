import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from './components/HotAccessories';
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from './components/NavOption.js';




function App() {
  return (
    <div >
      <Router>
      <PreNavbar/>
      <Navbar/>

      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories} />


     <Slider start={data.banner.start} />
     <Offers offer={data.offer} />
     <Heading text="STAR PRODUCTS" />
     <StarProduct starProduct={data.starProduct} />
     <Heading text="HOT ACCESSORIES" />
     <HotAccessoriesMenu />
     <Routes>
        <Route exact path='/music' element={<HotAccessories hotAccessoriesItem={data.hotAccessories.music} hotAccessoriesCover={data.hotAccessoriesCover.music} />}></Route>
        <Route exact path='/smartDevice' element={<HotAccessories hotAccessoriesItem={data.hotAccessories.smartDevice} hotAccessoriesCover={data.hotAccessoriesCover.smartDevice} />}></Route>
        <Route exact path='/home' element={<HotAccessories hotAccessoriesItem={data.hotAccessories.home} hotAccessoriesCover={data.hotAccessoriesCover.home} />}></Route>
        <Route exact path='/lifestyle' element={<HotAccessories hotAccessoriesItem={data.hotAccessories.lifeStyle} hotAccessoriesCover={data.hotAccessoriesCover.lifeStyle} />}></Route>
        <Route exact path='/mobileAccessories' element={<HotAccessories hotAccessoriesItem={data.hotAccessories.mobileAccessories} hotAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}></Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
  
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />

      <Footer footer={data.footer} />




     </Router>


     
    </div>
  );
}

export default App;

