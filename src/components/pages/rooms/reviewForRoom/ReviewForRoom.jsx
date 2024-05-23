
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Timestamp from '../reviewForRoom/Timestamp';

import { FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const ReviewForRoom = () => {
    
    const { roomNo } = useParams();
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8000/reviewForRoom`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const filteredReviews = data.filter(review => review.roomNumber === parseInt(roomNo));
                console.log(filteredReviews)
                setReviews(filteredReviews);
            })
            
    }, [roomNo]); 

    return (
        <div className='container mx-auto w-[90%] md:w-[70%] lg:w-[50%]  my-10'>
            <Helmet>
                <title>Reviews | RestY</title>
        </Helmet>
            <h2 className='text-2xl text-center font-bold mb-4'>Reviews for Room {roomNo}</h2>
           
           
                {reviews.map(review => (
                    <div key={review._id} className='p-3 w-full mx-auto border mb-4 '>

                       <div className="flex gap-2 mb-2 ">
                        <div className=" w-12 h-12 rounded-full border border-black">
                            <img src={review.userPhoto} className='rounded-full' />
                            
                        </div>
                        
                        <div className=''>
                            <p className='text-[18px] font-semibold'>{review.username}</p>
                            <p className='text-[12px]'><Timestamp date={review.timestamp} /></p>
                            </div>
                       </div>
                        
                       <p className='py-2'>{review.comment}</p>
                       <div className='flex gap-2 items-center my-1'>
                       <FaStar color="gold" />
                        <p> {review.rating}</p>
                       </div>
                        
                        
                 
                    </div>
                ))}
            

            
        </div>
    );
};

export default ReviewForRoom; 

