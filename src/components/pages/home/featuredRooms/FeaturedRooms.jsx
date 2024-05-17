import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("http://localhost:8000/allrooms")
            .then((res) => res.json())
            .then((data) => {
                setRooms(data);
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false); 
            });
    }, []);

    return (
        <div className="h-[500px] container mx-auto my-10">
            <Swiper
            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            
            slidesPerView={5}
            
            navigation
            pagination={{ clickable: true }}
           
            spaceBetween={10} 
            className="my-swiper"
                
            >
                {rooms.map(item => (
                    <SwiperSlide key={item._id}>
                        <div >
                        <img src={item.image} className="relative h-[290px] w-96 bg-no-repeat " />
                        <p className={`absolute top-0 right-0 text-white py-2 px-3 ${item.availability ? 'bg-green-600' : 'bg-red-600'}`}>
                            {item.availability ? 'Available' : 'Unavailable'}
                        </p>
                        </div>
                        <div className='border border-grey mb-10'>
                        <p >{item.description}</p>
                        <Link><button className=''>Book Now</button></Link>
                        </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>

           
        </div>
    );
};

export default FeaturedRooms;
