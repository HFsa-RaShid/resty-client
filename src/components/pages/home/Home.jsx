import { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import FeaturedRooms from "./featuredRooms/FeaturedRooms";
import NewsLetter from "./newsletter/NewsLetter";
import SpecialOffersModal from "./specialOffersModal/SpecialOffersModal";
import AllReviews from "./reviews/AllReviews";
import Mappp from "./map/Mappp";


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