import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { MdLocalOffer } from "react-icons/md";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("http://localhost:8000/allrooms")
            .then((res) => res.json())
            .then((data) => {
                const filteredRooms = data.filter(room => room.specialOffer !== "No special offer available");
                setRooms(filteredRooms);
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false); 
            });
    }, []);

    return (
        <div className="h-[600px] container mx-auto my-10 ">
            <h1 className='text-center text-3xl font-bold mb-4'>FEATURED ROOM</h1>
            <div className='w-[550px] mx-auto mb-8 text-center'>
                <p>Experience the epitome of hospitality as you explore our collection of featured rooms, each designed to exceed your expectations.</p>
            </div>
            <Swiper
            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            
            slidesPerView={3}
            
            navigation
            pagination={{ clickable: true }}
           
            spaceBetween={30} 
            className="my-swiper"
                
            >
                {rooms.map(item => (
                    <SwiperSlide key={item._id}>
                        <div className='border border-grey mb-12'> 
                        <div >
                            <img src={item.image} className="relative h-[290px] w-full bg-no-repeat " />
                            <p className={`absolute top-0 right-0 text-white py-2 px-3 ${item.availability ? 'bg-green-600' : 'bg-red-600'}`}>
                                {item.availability ? 'Available' : 'Unavailable'}
                            </p>
                        </div>
                        <div className='p-4'>
                            <p className='font-bold text-xl mb-2'>{item.description}</p>
                            <div className='flex items-center'>
                            <MdLocalOffer />
                            <p className='font-bold text-red-600 text-[12px]'>{item.specialOffer}</p>
                            </div>
                            <Link to={`/allrooms/${item._id}`}><button className='bg-[#4D7377] py-2 px-3 text-white my-3 rounded-xl'>Book Now</button></Link>
                        </div>
                        </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>

           
        </div>
    );
};

export default FeaturedRooms;
