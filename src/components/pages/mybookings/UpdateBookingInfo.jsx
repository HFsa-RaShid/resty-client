import {  useEffect, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateBookingInfo = () => {
    const {id} = useParams();
    console.log(id);
    const [art,setArt] = useState({});
    const [control,setControl] =useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() =>{
        fetch(`https://art-nest-server.vercel.app/arts/${id}`)
        .then(res => res.json())
        .then(data => {
            setArt(data);
            setControl(data);
            // console.log(data);
        })
    },[id,control])

    const formRef = useRef(null);
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const image_url = form.image_url.value;
        
        const updatedArt = {image_url};
        console.log(updatedArt);

        // send data to the server
        fetch(`https://art-nest-server.vercel.app/arts/${art._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updatedArt)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.modifiedCount > 0){
                setControl(!control)
                Swal.fire({
                    title: "Success!",
                    text: "Art Updated Successfully",
                    icon: "success"
                  })
                  formRef.current.reset();
            }
            else{
                Swal.fire({
                    title: "Sorry!",
                    text: "Please Try Again",
                    icon: "error"
                  })
            }
           

        })
    }

    return (
        <div>
            <form ref={formRef} onSubmit={handleUpdate} className='h-[550px] bg-red-400 w-[50%] mx-auto'>
                <div>
                    <label htmlFor="datePicker">Select Date:</label>
                    <DatePicker
                        id="datePicker"
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
                <button type="submit">Update Date</button>
            </form>
        </div>
    );
};

export default UpdateBookingInfo;