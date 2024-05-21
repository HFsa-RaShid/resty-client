
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-3xl font-bold text-center my-8">CONTACT US</h1>
            <div className="w-[80%] mx-auto flex gap-20">
                <div className="w-[50%] h-[450px] relative">
                    <img src="https://i.ibb.co/dpWv4kX/5-107.jpg" className="w-full h-full" />
                    <div className="absolute bg-black bg-opacity-50 bottom-0">
                        <div className="flex text-white p-5 gap-6">
                            <div>
                                <div className="flex gap-2 items-center text-3xl">
                                <FaLocationDot />
                                    <h1>RestY</h1>
                                </div>
                                <p>Your Perfect Stay, Just a Click Away</p>
                                <p>Sagordi,Hold No: 0734,Barishal sadar,</p>
                                <p>Barishal-8200</p>
                            </div>
                            <div>
                                <div className="flex gap-2 mb-4">
                                    <FaPhoneAlt />
                                    <p>+880 1726748929</p>

                                </div>

                                <div className="flex gap-2">
                                    <MdEmail />
                                    <p>resty@gmail.com</p>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
            
        
    );
};

export default ContactUs;