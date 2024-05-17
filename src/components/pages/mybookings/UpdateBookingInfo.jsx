import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateBookingInfo = () => {
    const { id } = useParams();
    const [myBookings, setMyBookings] = useState({});
    const [control, setControl] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        
        fetch(`http://localhost:8000/myBookings/${id}`)
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

        fetch(`http://localhost:8000/myBookings/${id}`, {
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
            .catch(error => console.error('Error updating data:', error)); // Catch fetch errors
    };

    return (
        <div className='my-20'>
            <form ref={formRef} onSubmit={handleUpdate}  className='h-[200px] w-[50%] mx-auto border'>
                <div className='p-20'>
                    <div className='mb-6'>
                        <label htmlFor="datePicker" className='mr-6'>Select Date:</label>
                        <DatePicker
                            id="datePicker"
                            className='border border-black'
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat="yyyy-MM-dd"
                        />
                    </div>
                    <button type="submit">Update Date</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBookingInfo;
