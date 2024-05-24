import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Helmet } from 'react-helmet';
import AOS from "aos";
import "aos/dist/aos.css";

const UpdateBookingInfo = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    const { id } = useParams();
    const [myBookings, setMyBookings] = useState({});
    const [control, setControl] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        
        fetch(`https://resty-server.vercel.app/myBookings/${id}`)
            .then(res => res.json())
            .then(data => {
                setMyBookings(data);
                // setControl(data);
                console.log('Received data:', data);
            })
            .catch(error => console.error('Error fetching data:', error)); 
    }, [id]);

    const formRef = useRef(null);
    const handleUpdate = e => {
        e.preventDefault();
        const updatedDate = { selectedDate };
        // console.log(`Fetching data for booking ID: ${id}`); 

        fetch(`https://resty-server.vercel.app/myBookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedDate),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setControl(!control);
                    Swal.fire({
                        title: "Success!",
                        text: "Booking Updated Successfully",
                        icon: "success"
                    }).then(() => {
                        navigate('/myBookingsPage');
                    });
                    formRef.current.reset();
                } else {
                    Swal.fire({
                        title: "Sorry!",
                        text: "Please Try Again",
                        icon: "error"
                    });
                }
            })
            
    };

    return (
        <div className='my-20' data-aos = "fade-up">
            <Helmet>
                <title>Update Booking | RestY</title>
        </Helmet>
            <form ref={formRef} onSubmit={handleUpdate}  className='h-[180px] md:h-[220px] w-[80%] md:w-[50%] mx-auto border' data-aos = "fade-up">
                <div className='p-4 md:p-20'>
                    <div className='mb-6'>
                        <label htmlFor="datePicker" className='mr-6 text-2xl font-bold '>Select Date:</label>
                        <DatePicker
                            id="datePicker"
                            className='border border-black'
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat="yyyy-MM-dd"
                        />
                    </div>
                    <button type="submit" className="mr-4 py-2 px-4 bg-[#4D7377] text-white rounded-2xl">Update Date</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBookingInfo;
