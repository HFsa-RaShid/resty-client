import { useEffect, useState } from "react";
import AvailableRoomsCard from "./AvailableRoomsCard";


const AvailableRooms = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);
   
   

    useEffect(() => {
        setLoading(true); 
        fetch("http://localhost:5000/allrooms")
        .then((res) => res.json())
        .then(data => {
            setItems(data.filter(room => room.availability === true));
            setLoading(false); 
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setLoading(false); 
        });
    }, [control]);
    return (
        <div className="container mx-auto my-10">
             <h2 className="text-center text-3xl text-black font-bold mb-6">AVAILABLE ROOMS</h2>
             {loading ? ( 
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (

               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-4">
                    
                    
                    {
                        items.map(allrooms => (
                            <AvailableRoomsCard key={allrooms._id} allrooms={allrooms}></AvailableRoomsCard>
                            
                        ))
                      
                    }
                </div>
            )}
        </div>
    );
};

export default AvailableRooms;
