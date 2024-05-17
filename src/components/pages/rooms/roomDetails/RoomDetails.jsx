import { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../provider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const RoomDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [startDate, setStartDate] = useState(new Date());

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

    const handleBookNow = () => {
        if (room.availability) {
            Swal.fire({
                title: 'Booking Confirmation',
                
                html: 
                   `Room Description: ${room.description}<br>
                   Price per Night: ${room.pricePerNight}<br>
                   Room Size: ${room.roomSize}<br>
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
                    <img src={room.image} className="w-[90%] h-[500px] mx-auto" alt="Room" />
                </div>
                <div className="w-[55%] ">
                    <h1>{room.description}</h1>
                    <p>Price per Night: ${room.pricePerNight}</p>
                    <p>Room Size: {room.roomSize}</p>
                    <p>Availability: {room.availability ? 'Available' : 'Not Available'}</p>
                    <p>Special Offers: {room.specialOffer}</p>
                    <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                        className="border border-black"
                        dateFormat="yyyy-MM-dd"
                    />
                    <div>
                    <button onClick={handleBookNow}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
