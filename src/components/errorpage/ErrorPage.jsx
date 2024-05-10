import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";


const ErrorPage = () => {
    
    return (
        
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-bold text-red-500 mb-6">
                <AiOutlineWarning className="inline-block text-6xl" />
                Oops! 404 Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-6 ">
                The page you are looking for does not exist.
            </p>
            <Link to="/" className="text-white bg-black py-2 px-3 rounded-2xl">
                Go Back to Home
            </Link>
        </div>

    );
};

export default ErrorPage;