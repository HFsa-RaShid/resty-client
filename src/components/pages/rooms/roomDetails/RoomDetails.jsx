import { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";

import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const RoomDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [allrooms,setRoom] = useState({});
    const ImageUrl = "https://i.ibb.co/Zx9JR3q/card.jpg"

    useEffect(() =>{
        fetch(`http://localhost:5000/allrooms/${id}`)
        .then(res => res.json())
        .then(data => {
            setRoom(data)
            console.log(data);
        })
    },[id])

    const handleBookNow = () => {
        if (allrooms.availability) {
            Swal.fire({
                title: 'Booking Confirmation',
                text: 'Are you sure you want to book this room?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, book it!',
                cancelButtonText: 'No, cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Update availability in the database
                    fetch(`http://localhost:5000/allrooms/${id}`, {
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
                        setRoom(prevState => ({
                            ...prevState,
                            availability: false
                        }));
                        Swal.fire('Success!', 'Room booked successfully.', 'success');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire('Error', 'Failed to update availability.', 'error');
                    });
                }
            });
        } 
        else 
        {
            Swal.fire('Room Unavailable', 'This room is already booked.', 'error');
        }
    };

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <div className="my-10">
            <div className="flex gap-10">
                <div className="w-[45%]">
                <img src={allrooms.image} className="w-[90%] h-[500px] mx-auto" />
                </div>
                <div className="w-[55%]">
                    <h1>{allrooms.description}</h1>
                    <p>Price per Night: ${allrooms.pricePerNight}</p>
                    <p>Room Size: {allrooms.roomSize}</p>
                    <p>Availability: {allrooms.availability ? 'Available' : 'Not Available'}</p>
                    <p>Special Offers: {allrooms.specialOffer}</p>
                    <Link>
                    <button onClick={handleBookNow}>
                        Book Now
                    </button>
                    </Link>



                </div>

            </div>
            
        </div>
    );
};

export default RoomDetails;