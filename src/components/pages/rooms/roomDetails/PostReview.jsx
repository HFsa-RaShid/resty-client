

import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import Timestamp from "../reviewForRoom/Timestamp"; 
import Swal from 'sweetalert2'; 

const PostReview = () => {
    const { user } = useContext(AuthContext);
    const { roomNo } = useParams();
    const [startDate, setStartDate] = useState(new Date());
    const [rating, setRating] = useState(1); 
    const [comment, setComment] = useState(""); 
    const navigate = useNavigate();

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newReview = {
            username: user.displayName,
            roomNumber: parseInt(roomNo),
            rating: rating,
            comment: comment,
            timestamp: new Date().toISOString(),
            userPhoto: user.photoURL,
        };
    
        fetch(`http://localhost:8000/reviews`, {
            method: 'POST',
            body: JSON.stringify(newReview),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
               
                Swal.fire({
                    title: "Submitted!",
                    text: "Your review has been submitted.",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to submit review.",
                    icon: "error"
                });
            }
        })
   
};
    
    
    return (
        <div className="max-w-md mx-auto mt-8">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-2">
                            <label className="block text-sm font-bold mb-2" htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                value={user?.displayName || ""}
                                readOnly
                                name="user_name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                <div className="">
                    <label className="block text-sm font-bold mb-2">Room Number:</label>
                    <input type="text" value={roomNo} className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline"/>
          
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number" 
                        min="1" 
                        max="5" 
                        value={rating} 
                        onChange={(e) => setRating(parseInt(e.target.value))}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Comment:</label>
                    <textarea 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={comment} 
                        onChange={handleCommentChange} 
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Timestamp:</label>
                    <div className="text-[#72a8a7]">
                        <Timestamp date={startDate} />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-[#4D7377] hover:bg-[#2d484b] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostReview;



