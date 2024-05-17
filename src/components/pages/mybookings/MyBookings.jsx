import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyBookings = () => {
    const { user } = useContext(AuthContext) || {};
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);

    useEffect(() => {
        setLoading(true); 
        fetch(`http://localhost:8000/myBookings/email/${user?.email}`)
        .then((res) => res.json())
        .then(data => {
            setItems(data);
            setLoading(false); 
        })
    }, [user, control]);

    // cancel booking
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: false,
            showCloseButton: true, 
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel Booking!",
            customClass: {
                closeButton: 'custom-close-button' 
            }
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/myBookings/${_id}`, {
                    method: 'DELETE',
                    body: JSON.stringify({ email: user.email }), 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        Swal.fire({
                            title: "Canceled!",
                            text: "Your booking has been cancelled.",
                            icon: "success"
                        });
                        setControl(!control);
                        fetch(`http://localhost:8000/allrooms/${_id}`, {
                            method: 'PUT', 
                            body: JSON.stringify({ availability: true }), 
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        
                        
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to cancel booking.",
                            icon: "error"
                        });
                    }
                })
                
            }
        });
    };
    


    return (
        <div className="container mx-auto my-10">
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div className="container mx-auto">
                    <table className="w-full  ">
                        <thead className="bg-[#7FBCBB]">
                            <tr className="text-xs font-bold text-black  uppercase ">
                                <th className="px-6 py-3 text-left ">Photo</th>
                                <th className="px-6 py-3 text-left ">Description</th>
                                <th className="px-6 py-3 text-left ">Selected Date</th>
                                <th className="px-6 py-3 text-left ">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#B8DADC]  text-black">
                            {items.map(item => (
                                <tr key={item._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={item.room.image} alt={item.room.description} className="h-16 w-16 " />
                                    </td>
                                    <td className="px-6 py-4 text-black">
                                        <div className="font-semibold">
                                            {item.room.description}
                                        </div>
                                        <div className=" text-sm">
                                            Price: ${item.room.pricePerNight}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                    {new Date(item.selectedDate).toLocaleDateString()}
                                        {/* {item.selectedDate} */}
                                        </td>
                                    <td className="px-6 py-4 font-bold">
                                    <Link to={`/updatedInfo/${item._id}`}><button className="ml-4 text-blue-600 hover:text-blue-800">Update</button></Link>
                                        <button onClick={() => handleDelete(item._id)} className="ml-4 text-red-800 hover:text-red-900">Cancel</button>
                                        <button className="ml-4 text-blue-600 hover:text-blue-800">Post Review</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyBookings;
