

const Banner = () => {
    return (
        <div className="relative">
        <video autoPlay loop muted className="object-cover w-full h-full">
            <source src="" type="video/mp4" />
            <source src="your-video-url.webm" type="video/webm" />
            Your browser does not support the video tag.
        </video>
        {/* You can add additional content or overlay here */}
    </div>
    );
};

export default Banner;