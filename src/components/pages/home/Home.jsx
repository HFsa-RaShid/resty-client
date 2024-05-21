import { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import FeaturedRooms from "./featuredRooms/FeaturedRooms";
import NewsLetter from "./newsletter/NewsLetter";
import SpecialOffersModal from "./specialOffersModal/SpecialOffersModal";


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
       
            
            <FeaturedRooms></FeaturedRooms>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;