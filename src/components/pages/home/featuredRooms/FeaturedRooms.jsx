import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("http://localhost:5000/allrooms")
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
           
            spaceBetween={10} // Set spaceBetween to 0 to remove space between slides
            className="my-swiper"
                
            >
                {rooms.map(item => (
                    <SwiperSlide key={item._id}>
                        <div >
                        <img src={item.image} className="relative h-[290px] w-96 bg-no-repeat " />
                        <p className='absolute top-0 right-0'>as</p>
                        </div>
                        <div className='border border-grey mb-10'>
                        <p >{item.description}</p>
                        <button className=''>Book Now</button>
                        </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>

           
        </div>
    );
};

export default FeaturedRooms;
