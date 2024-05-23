
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-3xl font-bold text-center my-8">CONTACT US</h1>
            <div className="w-[80%] mx-auto lg:flex gap-20">
                <div className="lg:w-[50%] h-[450px] relative mb-6">
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

                <div>
                <div className="border p-6 rounded-lg shadow-lg w-full max-w-4xl">
                            
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block ">First Name</label>
                                <input
                                type="text"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className="block ">Last Name</label>
                                <input
                                type="text"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label className="block ">Email</label>
                                <input
                                type="email"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="abc@example.com"
                                />
                            </div>
                            <div>
                                <label className="block ">Phone</label>
                                <input
                                type="tel"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="+880 1376324894"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block ">Message</label>
                                <textarea
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                rows="4"
                                placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <button
                                type="submit"
                                className="w-full p-2 bg-[#4D7377] text-white rounded-md hover:bg-[#315155] transition duration-200"
                                >
                                Send Message
                                </button>
                            </div>
                            </form>
                        </div>
                </div>

            </div>
        </div>
            
        
    );
};

export default ContactUs;