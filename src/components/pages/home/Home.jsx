import Banner from "./banner/Banner";
import FeaturedRooms from "./featuredRooms/FeaturedRooms";


import NewsLetter from "./newsletter/NewsLetter";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
       
            
            <FeaturedRooms></FeaturedRooms>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;