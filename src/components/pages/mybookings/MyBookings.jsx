import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);

    useEffect(() => {
        setLoading(true); 
        fetch(`http://localhost:5000/myBookings/${user?.email}`)
        .then((res) => res.json())
        .then(data => {
            setItems(data);
            console.log(data);
            setLoading(false); 
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setLoading(false); 
        });
    }, [user, control]);
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
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                              </div>
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
