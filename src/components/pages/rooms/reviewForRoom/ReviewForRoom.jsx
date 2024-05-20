
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Timestamp from '../reviewForRoom/Timestamp';


const ReviewForRoom = () => {
    
    const { roomNo } = useParams();
    const [reviews, setReviews] = useState([]);

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
        <div className='container mx-auto w-[50%] text-center my-10'>
            <h2 className='text-2xl font-bold mb-4'>Reviews for Room {roomNo}</h2>
           
            <ul>
                {reviews.map(review => (
                    <div key={review._id} className='w-full mx-auto border mb-4 text-center'>
                        <p><Timestamp date={review.timestamp} /></p>
                        <p>User: {review.username}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Comment: {review.comment}</p>
                        
                 
                    </div>
                ))}
            </ul>

            
        </div>
    );
};

export default ReviewForRoom; 

