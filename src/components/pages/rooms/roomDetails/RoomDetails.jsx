import { useContext, useEffect, useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import { MdLocalOffer } from "react-icons/md";

import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const RoomDetails = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://resty-server.vercel.app/reviewForRoom`)
            .then(res => res.json())
            .then(data => {
                
                const filteredReviews = data.filter(review => review.roomNumber === room.roomNumber);
                // console.log(filteredReviews)
                setReviews(filteredReviews);
            })
            
    }, [room.roomNumber]); 

    useEffect(() => {
        fetch(`https://resty-server.vercel.app/allrooms/${id}`)
            .then(res => res.json())
            .then(data => {
                setRoom(data);
            })
            .catch(error => {
                console.error('Error fetching room details:', error);
            });
    }, [id]);

    const handleBookNow = () => {
        if (!user) {
            navigate('/login');
           
        }
        else if (room.availability) {
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
                    fetch(`https://resty-server.vercel.app/myBookings`, {
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
                            
                            fetch(`https://resty-server.vercel.app/allrooms/${id}`, {
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
        <div className="my-10" >
            <Helmet>
                <title>Room Details | RestY</title>
        </Helmet>
             <div className="md:flex gap-10" data-aos = "fade-up">
      
                 <div className="lg:w-[45%] ">
                     <img src={room.image} className="w-[90%] h-[450px] mx-auto" alt="Room" />
                 </div>
                 <div className="w-[90%] lg:w-[55%] mx-auto">
                    <h1 className="text-2xl font-semibold ">{room.description}</h1>
                     <p className="my-3">Price per Night: ${room.pricePerNight}</p>
                     <p className="my-3">Room Size: {room.roomSize}</p>
                    <p className="my-3">Room Number: {room.roomNumber}</p>
                     <p className="my-3">Availability: {room.availability ? 'Available' : 'Not Available'}</p>
                    
                     <div className='flex items-center'>
                            <MdLocalOffer />
                             <p className='font-bold text-red-600 '>{room.specialOffer}</p>
                             </div>
                    
                    
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

                    {reviews.length > 0 ? (
                        <Link to={`/reviewForRoom/${room.roomNumber}`}>
                            <button className="mr-4 py-2 px-4 bg-[#4D7377] text-white rounded-2xl">See Reviews</button>
                        </Link>
                    ) : (
                        <p>No reviews yet.</p>
                    )}

                    <Link to={`/PostReview/${room.roomNumber}`}>
                        <button className="py-2 px-4 bg-[#4D7377] text-white rounded-2xl">Post Reviews</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;