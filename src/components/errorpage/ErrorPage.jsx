import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";


const ErrorPage = () => {
    
    return (
        
        <div className="flex flex-col items-center justify-center h-screen">
            <img src="https://i.ibb.co/1syBJdB/2658093.webp" alt="" />
            <p className="text-lg text-gray-600 mb-6 ">
                The page you are looking for does not exist.
            </p>
            <Link to="/" className="text-white bg-[#4D7377] py-2 px-3 rounded-2xl">
                Go Back to Home
            </Link>
        </div>

    );
};

export default ErrorPage;