import { Link } from "react-router-dom";


const AvailableRoomsCard = ({allrooms}) => {
    const {_id,image,description} = allrooms
    return (
        <div className="h-60 w-full relative">
            
           <Link to={`/allrooms/${_id}`}>
           <img src={image}  className="h-full w-full"/>
           <div className="absolute bottom-0 left-0">
                <h1 className="text-xl text-white font-bold">{description}</h1>
            </div>
           </Link>

        
          
          
            
        </div>
    );
};

export default AvailableRoomsCard;