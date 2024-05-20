import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableRoomsCard = ({ allrooms }) => {
    const { _id, image, description, roomNumber } = allrooms;
    const [room, setRoom] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/reviewForRoom/roomNumber/${roomNumber}`)
            .then(res => res.json())
            .then(data => {
                
                // console.log(data)
                setRoom(data);
             
            })
    }, [roomNumber]);
    return (
        <div className="h-60 w-full relative">
            <Link to={`/allrooms/${_id}`}>
                <img src={image} className="h-full w-full" />
                <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50">
                    <h1 className="text-xl text-white font-bold">{description}</h1>
                    
                    <p className="text-white">Reviews: {room.length}</p>
                    
                    
                </div>
            </Link>
        </div>
    );
};

export default AvailableRoomsCard;

