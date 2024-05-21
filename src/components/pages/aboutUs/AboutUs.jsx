

const AboutUs = () => {
    return (
        <div className="container mx-auto my-10  min-h-screen">
            <h1 className="text-3xl font-bold text-center my-10">ABOUT US</h1>
            
            <div className="flex gap-20 w-[80%] mx-auto">
            <div className="w-[55%]">
                
                <p ><span className="text-2xl font-semibold ">W</span>elcome to RestY – your ultimate destination for seamless hotel bookings and unforgettable stays. At RestY, we believe that travel should be a joy from the moment you start planning. Our mission is to simplify the booking process and connect you with the best accommodations to make every trip a memorable experience.</p>

                <h2 className="font-semibold text-xl mt-4 mb-2">Who We Are</h2>
                <p>
                RestY is a dedicated team of travel enthusiasts, tech innovators, and customer service experts. We understand that finding the perfect place to stay can make or break your trip. Thats why we're committed to offering a wide selection of hotels, from luxurious resorts to charming boutique inns, all at competitive prices.
                </p>

                <h2 className="font-semibold text-xl mt-4 mb-2">What We Offer</h2>
                <p className="mt-4 mb-2">
                    <span className="font-bold pr-2">Wide Selection of Hotels:</span>
                 Explore a vast array of hotels across the globe. Whether you’re looking for a budget-friendly option or a five-star experience, RestY has something for every traveler.
                </p>
                <p className="mt-4 mb-2">
                    <span className="font-bold pr-2">Easy Booking Process:</span>
                    Our user-friendly platform ensures a smooth booking experience. With just a few clicks, you can find, compare, and book your ideal accommodation.
                </p>
                <p className="mt-4 mb-2">
                    <span className="font-bold pr-2">Best Price Guarantee:</span>
                    We offer competitive rates and exclusive deals, ensuring you get the best value for your money.
                </p>
                <p className="mt-4 mb-2">
                    <span className="font-bold pr-2">24/7 Customer Support:</span>
                    Our dedicated support team is available around the clock to assist you with any questions or concerns, ensuring a hassle-free booking experience.
                </p>
                <p className="mt-4 mb-2">
                    <span className="font-bold pr-2">Trusted Reviews:</span>
                    Read genuine reviews from other travelers to help you make informed decisions. We value transparency and strive to provide you with the most accurate information.
                </p>
                
            </div>
            <div className="w-[45%]">
                
                <div className="relative">
                <img src="https://i.ibb.co/d2hfHGt/mountain.jpg" className="w-full h-[400px]" />
                 <div className="absolute border-white  w-[80%]  top-[80%] left-[10%] border-8">
                 <img src="https://i.ibb.co/Y2KhX1c/family-room.jpg" className="w-full h-[250px]" />
                 </div>
                </div>
                

            </div>
            </div>

            <div className="w-[80%] mx-auto">
            <h1 className="font-semibold text-xl mt-4 mb-2">Our Commitment</h1>
                <p>
                At RestY, we are committed to providing an exceptional booking experience. We continuously update our listings and refine our platform based on user feedback to ensure that you have access to the best options and the latest information. Our goal is to make travel planning effortless and enjoyable for everyone.
                </p>
                <h1 className="font-semibold text-xl mt-4 mb-2">Join Us on Our Journey</h1>
                
                <p>
                We invite you to explore the world with RestY. Whether you’re planning a weekend getaway, a business trip, or a family vacation, we’re here to help you find the perfect place to rest and recharge. Thank you for choosing RestY – where every journey begins with a great stay.
                </p>
            </div>
            
        </div>
    );
};

export default AboutUs;