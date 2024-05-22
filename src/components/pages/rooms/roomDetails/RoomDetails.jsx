import { useContext, useEffect, useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../provider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const RoomDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch(`http://localhost:8000/allrooms/${id}`)
            .then(res => res.json())
            .then(data => {
                setRoom(data);
            })
            .catch(error => {
                console.error('Error fetching room details:', error);
            });
    }, [id]);


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

    const handleBookNow = () => {
        if (!user) {
            // If user is not logged in, navigate to login page
            navigate('/login');
            return;
        }
        if (room.availability) {
            const formattedDate = startDate.toLocaleDateString();
            Swal.fire({
                title: 'Booking Confirmation',
                
                html: 
                   `Room Description: ${room.description}<br>
                   Price per Night: ${room.pricePerNight}<br>
                   Room Size: ${room.roomSize}<br>
                   Selected Date: ${formattedDate}<br>
                   Special Offers: ${room.specialOffer}<br><br>
                   Are you sure you want to book this room?`,
                
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, book it!',
                cancelButtonText: 'No, cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:8000/myBookings`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            room: room,
                            userEmail: user.email,
                            selectedDate: startDate.toISOString()
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            
                            fetch(`http://localhost:8000/allrooms/${id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    availability: false
                                })
                            })
                            .then(res => res.json())
                            .then(data => {
                                if (data.success) {
                                    setRoom(prevRoom => ({
                                        ...prevRoom,
                                        availability: false
                                    }));
                                    Swal.fire('Success!', 'Room booked successfully.', 'success');
                                } else {
                                    Swal.fire('Error', 'Failed to update availability.', 'error');
                                }
                            })
                            
                        } else {
                            Swal.fire('Error', 'Failed to book room.', 'error');
                        }
                    })
                    
                }
            });
        } else {
            Swal.fire('Room Unavailable', 'This room is already booked.', 'error');
        }
    };

    return (
        <div className="my-10">
            <div className="flex gap-10">
      
                <div className="w-[45%] ">
                    <img src={room.image} className="w-[90%] h-[450px] mx-auto" alt="Room" />
                </div>
                <div className="w-[55%] ">
                    <h1 className="text-2xl font-semibold ">{room.description}</h1>
                    <p className="my-3">Price per Night: ${room.pricePerNight}</p>
                    <p className="my-3">Room Size: {room.roomSize}</p>
                    <p className="my-3">Room Number: {room.roomNumber}</p>
                    <p className="my-3">Availability: {room.availability ? 'Available' : 'Not Available'}</p>
                    <p className="my-3">Special Offers: {room.specialOffer}</p>
                    <div className="flex gap-2 items-center">
                    <p className="my-3">Select Date:</p>
                    <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                        className="border border-black"
                        dateFormat="yyyy-MM-dd"
                    />
                    </div>
                    <div>
                    <button onClick={handleBookNow} className="my-4 py-2 px-4 bg-[#4D7377] text-white rounded-xl">Book Now</button>
                    </div>

                    {/* <p>{reviews.length}</p> */}

                    <Link to={`/reviewForRoom/${room.roomNumber}`}>
                        <button className="underline text-blue-600">See Reviews</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;

