import { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import FeaturedRooms from "./featuredRooms/FeaturedRooms";
import NewsLetter from "./newsletter/NewsLetter";
import SpecialOffersModal from "./specialOffersModal/SpecialOffersModal";
import AllReviews from "./reviews/AllReviews";
import Mappp from "./map/Mappp";
import { Helmet } from "react-helmet";


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      setIsModalOpen(true);
    }, []);
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    
    return (
        <div>
          <Helmet>
                <title>Home | RestY</title>
        </Helmet>
            <SpecialOffersModal isOpen={isModalOpen} onRequestClose={closeModal} />
            <Banner></Banner>
       
            <Mappp></Mappp>
            <FeaturedRooms></FeaturedRooms>
            <NewsLetter></NewsLetter>
            <AllReviews></AllReviews>
            
        </div>
    );
};

export default Home;