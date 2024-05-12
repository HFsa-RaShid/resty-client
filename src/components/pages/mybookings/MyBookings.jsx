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
        fetch(`http://localhost:5000/myBookings/${user?.email}`)
        .then((res) => res.json())
        .then(data => {
            setItems(data);
            setLoading(false); 
        })
    }, [user, control]);

    // cancel booking

    const handleDelete = _id =>{
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
                fetch(`http://localhost:5000/allrooms/${_id}`,{
                    method: 'DELETE'
                })
                .then( res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Art has been deleted.",
                            icon: "success"
                        });
                        setControl(!control);

                    }
                });
            }
        });
    };


    return (
        <div className="container mx-auto my-10">
            {loading ? (
                <div className="flex justify-center items-center h-screen ">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 fonts container mx-auto">
                    {
                        items.map(item => (

                            <div key={item._id} className="card  bg-base-100 shadow-xl">
                            <figure><img src={item.room.image} className="w-full h-[260px]"/></figure>
                            <div className="card-body">
                              <h2 className="card-title"></h2>
                              <p>{item.room.description} </p>
                              <p>{item.selectedDate} </p>
                              <Link to={`/update/${item._id}`}><button className="w-full bg-slate-700 hover:bg-slate-500 text-white py-2 rounded-xl">Update</button></Link>
                              
                              <button onClick={() => handleDelete(item._id)} className="w-full bg-slate-700 hover:bg-slate-500 text-white py-2 rounded-xl">Cancel</button>
                            
                             
                             
                                <button className="">Post Review</button>
                              
                            </div>
                          </div>  
                                
                                    
                                
                                    
                        ))
                            
                    }
                </div>
            )}
        </div>
    );
};

export default MyBookings;
