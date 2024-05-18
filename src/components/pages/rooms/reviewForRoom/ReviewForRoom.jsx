import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import { useParams } from 'react-router-dom';


const ReviewForRoom = () => {
    const { user } = useContext(AuthContext);
    const { roomNo } = useParams();
    const [room, setRoom] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/reviewForRoom`)
            .then(res => res.json())
            .then(data => {
                const filteredReviews = data.filter(review => review.room_number === roomNo);
                setRoom(filteredReviews);
             
            })
    }, [roomNo]);


    return (
        <div>
            <h2>Reviews for Room {roomNo}</h2>
            <ul>
                {room.map(review => (
                    <li key={review._id}>
                        <p>User: {review.user_name}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Comment: {review.comment}</p>
                        {/* Add other review details here */}
                    </li>
                ))}
            </ul>

            
        </div>
    );
};

export default ReviewForRoom;