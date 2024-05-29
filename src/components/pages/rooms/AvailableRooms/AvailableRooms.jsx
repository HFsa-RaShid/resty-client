

import { useEffect, useState } from "react";
import AvailableRoomsCard from "./AvailableRoomsCard";
import { Helmet } from "react-helmet";

const AvailableRooms = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

   

    
    useEffect(() => {
        setLoading(true);
        let url = "https://resty-server.vercel.app/allrooms";
        if (minPrice || maxPrice) {
            url += `?minPrice=${minPrice}&maxPrice=${maxPrice}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setItems(data.filter(room => room.availability === true));
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);  
                setLoading(false);
            });
    }, [minPrice, maxPrice]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let url = "https://resty-server.vercel.app/allrooms";
            if (minPrice || maxPrice) {
                url += `?minPrice=${minPrice}&maxPrice=${maxPrice}`;
            }

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setItems(data.filter(room => room.availability === true));
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [minPrice, maxPrice]);



    return (
        <div className="container mx-auto my-10">
            <Helmet>
                <title>Available Room | RestY</title>
        </Helmet>
            <h2 className="text-center text-3xl font-bold mb-6">AVAILABLE ROOMS</h2>

            <div className="flex justify-center mb-6">
                <input 
                    type="number" 
                    placeholder="Min Price" 
                    value={minPrice} 
                    onChange={(e) => setMinPrice(e.target.value)} 
                    className="mr-2 p-2 border rounded w-[110px] md:w-[180px]"
                />
                <input 
                    type="number" 
                    placeholder="Max Price" 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(e.target.value)} 
                    className="mr-2 p-2 border rounded w-[110px] md:w-[180px]"
                />
            </div>

            {loading ? (
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-4">
                    {items.map(allrooms => (
                        <AvailableRoomsCard key={allrooms._id} allrooms={allrooms} ></AvailableRoomsCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailableRooms;



