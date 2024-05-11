import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);

    useEffect(() => {
        setLoading(true); 
        fetch(`http://localhost:5000/bookings/${user?.email}`)
        .then((res) => res.json())
        .then(data => {
            setItems(data);
            console.log(data)
            setLoading(false); 
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setLoading(false); 
        });
    }, [user, control]);
    return (
        <div>
            {
                items.map(allrooms => (
                    
                           <div key={allrooms._id}>
                            <p>{allrooms._id}</p>
                           </div>
                            
                ))
                      
            }
        </div>
    );
};

export default MyBookings;
