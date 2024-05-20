
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Timestamp from '../reviewForRoom/Timestamp';
import { AuthContext } from '../../../../provider/AuthProvider';
import { FaStar } from 'react-icons/fa';

const ReviewForRoom = () => {
    
    const { roomNo } = useParams();
    const [reviews, setReviews] = useState([]);

    const {user,photoLink}= useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:8000/reviewForRoom`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const filteredReviews = data.filter(review => review.roomNumber === parseInt(roomNo));
                // console.log(filteredReviews)
                setReviews(filteredReviews);
            })
            
    }, [roomNo]); 

    return (
        <div className='container mx-auto w-[50%]  my-10'>
            <h2 className='text-2xl text-center font-bold mb-4'>Reviews for Room {roomNo}</h2>
           
            <ul>
                {reviews.map(review => (
                    <div key={review._id} className='p-3 w-full mx-auto border mb-4 '>

                       <div className="flex gap-2 mb-2 ">
                       <div className=" w-12 h-12 rounded-full border border-black">
                        
                        <img  src={review.userPhoto} className=" my-anchor-element h-full w-full mx-auto rounded-full " />
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
            </ul>

            
        </div>
    );
};

export default ReviewForRoom; 

