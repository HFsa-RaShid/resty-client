import React from 'react';
import video from '../../../../assets/image/video.mp4';

const Banner = () => {
    return (
        <div className='w-screen mb-10'>
            <video 
                src={video} 
                type="video/mp4" 
                autoPlay 
                loop 
                muted 
                style={{ width: '100%' }}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Banner;

// import React from 'react';

// const Banner = () => {
//     return (
//         <div className='w-screen h-screen my-20'>
//             <iframe 
//                 src="https://player.vimeo.com/video/945756299?autoplay=1&loop=1" 
//                 className="w-full h-full" 
//                 frameborder="0" 
//                 allow="autoplay; fullscreen; picture-in-picture" 
//                 allowfullscreen
//             ></iframe>
//         </div>
//     );
// };

// export default Banner;

