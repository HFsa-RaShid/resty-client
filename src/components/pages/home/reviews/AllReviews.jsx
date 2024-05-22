import { useEffect } from "react";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Timestamp from '../../rooms/reviewForRoom/Timestamp'
const AllReviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8000/reviewForRoom`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            
    }, []); 
    return (
        <div className="h-[600px] container mx-auto my-10 ">
        <h1 className='text-center text-3xl font-bold my-10'>REVIEWS</h1>
        {/* <div className='w-[550px] mx-auto mb-8 text-center'>
            <p>Experience the epitome of hospitality as you explore our collection of featured rooms, each designed to exceed your expectations.</p>
        </div> */}
        <Swiper
        
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        
        slidesPerView={4}
        
        navigation
        pagination={{ clickable: true }}
       
        spaceBetween={10} 
        className="my-swiper"
            
        >
            {reviews.map(item => (
                <SwiperSlide key={item._id}>
                    <div className='bg-[#b2e6de] shadow-lg mb-12 h-[400px] text-black rounded-xl'> 

                    <div className=" p-3 h-[80%]">
                        
                        <div className="flex items-end justify-end">
                        <img src="https://i.ibb.co/N6pc4Wh/Quotation-Mark-PNG-Picture.png"  className="w-[50px] h-[40px] "/>

                        </div>
                        <p className="text-[14px]">{item.comment}</p>
                        
                    </div>
                    <div className="flex gap-2 p-3">
                        <div className=" w-12 h-12 rounded-full border border-black">
                            <img src={item.userPhoto} className='rounded-full w-full h-full' />
                            
                        </div>
                        
                        <div className=''>
                            <p className='text-[18px] font-semibold'>{item.username}</p>
                            <p className='text-[12px]'><Timestamp date={item.timestamp} /></p>
                            </div>
                       </div>
                    
                    </div>
                    
                </SwiperSlide>
            ))}
        </Swiper>

       
    </div>
);
};

export default AllReviews;