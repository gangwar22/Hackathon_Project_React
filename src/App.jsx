import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import Footer from './Footer/Footer';
import Get from './ExpolreFood/Get';
import Explore from './ExpolreFood/Explore';
import Faq from './ExpolreFood/Faq';
import ExploreTwo from './ExpolreFood/ExploreTwo';
import About from './About/About';
import Banner from './Banner/Banner';

import Header from './Header/Header';


const App = () => {
  
  return (
    <>
      
      <Header/>
      <Banner/>
      <About/>
      <ExploreTwo/>
      <Faq/>
      <Explore/>
      <Get/>
      <Footer/>
    </>
  );
}

export default App;
