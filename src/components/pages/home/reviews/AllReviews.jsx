import { useEffect } from "react";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Timestamp from '../../rooms/reviewForRoom/Timestamp'
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://resty-server.vercel.app/reviewForRoom`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            
    }, []); 
    return (
        <div className="h-[600px] container mx-auto my-10 ">
        <h1 className='text-center text-3xl font-bold my-10'>REVIEWS</h1>
      
        <Swiper
        
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        
        slidesPerView={4}
        
        navigation
        pagination={{ clickable: true }}
       
        spaceBetween={10} 

        breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 10 },
            425: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="my-swiper"
            
        >
            {reviews.map(item => (
                <SwiperSlide key={item._id}>
                    <div className='bg-[#D3E5E2] shadow-lg mb-12 h-[380px] text-black rounded-xl'> 

                    <div className=" p-3 h-[70%]">
                        
                        <div className="flex items-end justify-end">
                        <img src="https://i.ibb.co/N6pc4Wh/Quotation-Mark-PNG-Picture.png"  className="w-[50px] h-[40px] "/>

                        </div>
                        <p>Room No: <span>{item.roomNumber}</span></p>
                        <p className="text-[15px]">{item.comment}</p>
                        
                    </div>
                    <div className="px-3">
                        <Rating
                        style={{ maxWidth: 100 }}
                        value={item.rating}
                        readOnly
                        />
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