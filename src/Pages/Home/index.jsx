
import FeatureCategorySection from '../../Components/Home/FeatureCategorySection';
// import './home.css';
import HomeSlider from '../../Components/Home/HomeSlider';
import ProductItem from '../../Components/Product/ProductItem';
import PopularProduct from '../../Components/Home/PopularProduct';
import NewProduct from '../../Components/Home/NewProduct';
import BannerSection from '../../Components/Home/BannerSection';
import FeatureProduct from '../../Components/Home/FeatureProduct';
import BannerSection2 from '../../Components/Home/BannerSection2';
import BeautyProduct from '../../Components/Home/BeautyProduct';
import NewsLetter from '../../Components/Home/NewsLetter';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Layout from '../../Components/Layout';
function Home() {
  return (

    <>
    
         {/* <Header /> */}
         <Layout>
        <HomeSlider/>
         <FeatureCategorySection/>
          <PopularProduct/>
          <NewProduct/>
          <BannerSection/>
          <FeatureProduct/>
          <BannerSection2/>
          <BeautyProduct/>
          {/* <NewsLetter/>
          <Footer/> */}
          </Layout>
        
    </>
  )
}

export default Home;
