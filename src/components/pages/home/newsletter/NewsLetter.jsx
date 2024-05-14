

const NewsLetter = () => {
    return (
        <div className="my-10 container mx-auto">
            <div className="w-2/3 mx-auto bg-[#D3E5E2] h-[300px] text-black">
                <h1 className="text-4xl font-bold text-center py-10">Join Our Newsletter</h1>
                <p className="text-xl px-20 font-medium">Get weekly access to our best deals,tips & tricks</p>
                <div className="flex px-20 gap-7 my-4">
                    <input type="text" className="px-3 bg-white" placeholder="Name"/>
                    
                    <input type="email" className="w-[80%] bg-white px-3" placeholder="abc@gmail.com" required />
                    
                    <button className="bg-black text-white py-2 px-8">JOIN</button>

                </div>
                <p className="italic px-20">No spam, we hate than more than you do.</p>

            </div>
            
        </div>
    );
};

export default NewsLetter;



