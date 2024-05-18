

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";


// const MyBookings = () => {
//     const { user } = useContext(AuthContext) || {};
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [control, setControl] = useState(false);
//     const [review, setReview] = useState({
//         username: user?.displayName || '',
//         rating: 1,
//         comment: '',
//         timestamp: new Date().toISOString(),
//         roomId: '',
//         roomNumber: '',
//     });
//     const [selectedItem, setSelectedItem] = useState(null);

//     useEffect(() => {
//         setLoading(true);
//         fetch(`http://localhost:8000/myBookings/email/${user?.email}`, {credentials: 'include'})
//             .then((res) => res.json())
//             .then(data => {
//                 setItems(data);
//                 setLoading(false);
//             });
//     }, [user, control]);

//     const openModal = (item) => {
//         setSelectedItem(item);
//         setReview({
//             ...review,
//             roomId: item.room._id,
//             roomNumber: item.room.roomNumber,
//         });
//         document.getElementById('my_modal_3').showModal();
//     };

//     const closeModal = () => {
//         document.getElementById('my_modal_3').close();
//         setReview({
//             ...review,
//             comment: '',
//             rating: 1,
//             roomId: '',
//             roomNumber: '',
//         });
//     };

//     const handleReviewSubmit = e => {
//         e.preventDefault();
//         const form = e.target;
//         const user_name = form.user_name.value;
//         const room_number = form.room_number.value;
//         const rating = form.rating.value;
//         const comment = form.comment.value;
//         const newReview = {user_name,room_number,rating,comment}
//         console.log(newReview);
//         fetch(`http://localhost:8000/reviews`, {
//             method: 'POST',
//             body: JSON.stringify(newReview),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if(data.insertedId){
//                     closeModal();
//                     Swal.fire({
//                         title: "Submitted!",
//                         text: "Your review has been submitted.",
//                         icon: "success"
//                     });
                    
//                 } else {
//                     Swal.fire({
//                         title: "Error!",
//                         text: "Failed to submit review.",
//                         icon: "error"
//                     });
//                 }
                   
//             });
//     };

//     const handleDelete = _id => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: false,
//             showCloseButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, Cancel Booking!",
//             customClass: {
//                 closeButton: 'custom-close-button'
//             }
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:8000/myBookings/${_id}`, {
//                     method: 'DELETE',
//                     body: JSON.stringify({ email: user.email }),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         if (data.success) {
//                             Swal.fire({
//                                 title: "Canceled!",
//                                 text: "Your booking has been cancelled.",
//                                 icon: "success"
//                             });
//                             setControl(!control);
//                             fetch(`http://localhost:8000/allrooms/${_id}`, {
//                                 method: 'PUT',
//                                 body: JSON.stringify({ availability: true }),
//                                 headers: {
//                                     'Content-Type': 'application/json'
//                                 }
//                             });
//                         } else {
//                             Swal.fire({
//                                 title: "Error!",
//                                 text: "Failed to cancel booking.",
//                                 icon: "error"
//                             });
//                         }
//                     });
//             }
//         });
//     };

//     return (
//         <div className="container mx-auto my-10 min-h-screen">
//             {loading ? (
//                 <div className="flex justify-center items-center h-screen">
//                     <span className="loading loading-spinner loading-lg"></span>
//                 </div>
//             ) : (
//                 <div className="container mx-auto">
//                     <table className="w-full">
//                         <thead className="bg-[#7FBCBB]">
//                             <tr className="text-xs font-bold text-black uppercase">
//                                 <th className="px-6 py-3 text-left">Photo</th>
//                                 <th className="px-6 py-3 text-left">Description</th>
//                                 <th className="px-6 py-3 text-left">Selected Date</th>
//                                 <th className="px-6 py-3 text-left">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-[#B8DADC] text-black">
//                             {items.map(item => (
//                                 <tr key={item._id}>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <img src={item.room.image} alt={item.room.description} className="h-16 w-16" />
//                                     </td>
//                                     <td className="px-6 py-4 text-black">
//                                         <div className="font-semibold">
//                                             {item.room.description}
//                                         </div>
//                                         <div className="text-sm">
//                                             Price: ${item.room.pricePerNight}
//                                         </div>
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {new Date(item.selectedDate).toLocaleDateString()}
//                                     </td>
//                                     <td className="px-6 py-4 font-bold">
//                                         <Link to={`/updatedInfo/${item._id}`}><button className="ml-4 text-blue-600 hover:text-blue-800">Update</button></Link>
//                                         <button onClick={() => handleDelete(item._id)} className="ml-4 text-red-800 hover:text-red-900">Cancel</button>
//                                         <button onClick={() => openModal(item)} className="ml-4 text-blue-600 hover:text-blue-800">Post Review</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}

//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box">
//                     <form onSubmit={handleReviewSubmit}>
//                         <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                         <h3 className="font-bold text-lg">Post Review</h3>
//                         <div className="mb-4">
//                             <label className="block  text-sm font-bold mb-2" htmlFor="username">Username</label>
//                             <input id="username" type="text" value={user?.displayName || ""} readOnly name="user_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline" />
//                         </div>

//                         <div className="mb-4">
//                             <label className="block  text-sm font-bold mb-2" htmlFor="roomNumber">Room Number</label>
//                             <input
//                                 id="roomNumber"
//                                 type="text"
//                                 value={selectedItem ? selectedItem.room.roomNumber : ''}
//                                 readOnly
//                                 name="room_number"
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block  text-sm font-bold mb-2" htmlFor="rating">Rating</label>
//                             <input id="rating" type="number" value={review.rating} name="rating" onChange={(e) => setReview({ ...review, rating: e.target.value })} min="1" max="5" className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white" />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block  text-sm font-bold mb-2" htmlFor="comment">Comment</label>
//                             <textarea id="comment" name="comment" value={review.comment} onChange={(e) => setReview({ ...review, comment: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white"></textarea>
//                         </div>
                        
//                         <div className="flex items-center justify-between">
//                             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
//                         </div>
//                     </form>
//                 </div>
//             </dialog>
//         </div>
//     );
// };

// export default MyBookings;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyBookings = () => {
    const { user } = useContext(AuthContext) || {};
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);
    const [review, setReview] = useState({
        username: user?.displayName || '',
        rating: 1,
        comment: '',
        timestamp: new Date().toISOString(),
        roomId: '',
        roomNumber: '',
    });
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (!user?.email) {
            setLoading(false);
            return;
        }

        setLoading(true);
        fetch(`http://localhost:8000/myBookings/email/${user.email}`, { credentials: 'include' })
            .then((res) => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setItems(data);
                } else {
                    setItems([]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching bookings:', error);
                setItems([]);
                setLoading(false);
            });
    }, [user, control]);

    const openModal = (item) => {
        setSelectedItem(item);
        setReview({
            ...review,
            roomId: item.room._id,
            roomNumber: item.room.roomNumber,
        });
        document.getElementById('my_modal_3').showModal();
    };

    const closeModal = () => {
        document.getElementById('my_modal_3').close();
        setReview({
            ...review,
            comment: '',
            rating: 1,
            roomId: '',
            roomNumber: '',
        });
    };

    const handleReviewSubmit = e => {
        e.preventDefault();
        const newReview = {
            username: user.displayName,
            roomNumber: selectedItem.room.roomNumber,
            rating: review.rating,
            comment: review.comment,
            timestamp: new Date().toISOString(),
            roomId: selectedItem.room._id
        };
        
        fetch(`http://localhost:8000/reviews`, {
            method: 'POST',
            body: JSON.stringify(newReview),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    closeModal();
                    Swal.fire({
                        title: "Submitted!",
                        text: "Your review has been submitted.",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to submit review.",
                        icon: "error"
                    });
                }
            })
            
    };

    // cancel Booking room

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel Booking!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/myBookings/${_id}`, {
                    method: 'DELETE',
                    body: JSON.stringify({ email: user.email }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your booking has been cancelled.",
                                icon: "success"
                            });
                            setControl(!control);
                            return fetch(`http://localhost:8000/allrooms/${_id}`, {
                                method: 'PUT',
                                body: JSON.stringify({ availability: true }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to cancel booking.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error cancelling booking:', error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to cancel booking.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div className="container mx-auto my-10 min-h-screen">
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div className="container mx-auto">
                    <table className="w-full">
                        <thead className="bg-[#7FBCBB]">
                            <tr className="text-xs font-bold text-black uppercase">
                                <th className="px-6 py-3 text-left">Photo</th>
                                <th className="px-6 py-3 text-left">Description</th>
                                <th className="px-6 py-3 text-left">Selected Date</th>
                                <th className="px-6 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#B8DADC] text-black">
                            {Array.isArray(items) && items.length > 0 ? items.map(item => (
                                <tr key={item._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={item.room.image} alt={item.room.description} className="h-16 w-16" />
                                    </td>
                                    <td className="px-6 py-4 text-black">
                                        <div className="font-semibold">
                                            {item.room.description}
                                        </div>
                                        <div className="text-sm">
                                            Price: ${item.room.pricePerNight}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(item.selectedDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 font-bold">
                                        <Link to={`/updatedInfo/${item._id}`}><button className="ml-4 text-blue-600 hover:text-blue-800">Update</button></Link>
                                        <button onClick={() => handleDelete(item._id)} className="ml-4 text-red-800 hover:text-red-900">Cancel</button>
                                        <button onClick={() => openModal(item)} className="ml-4 text-blue-600 hover:text-blue-800">Post Review</button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center text-black">
                                        No bookings found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleReviewSubmit}>
                        <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Post Review</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="username">Username</label>
                            <input id="username" type="text" value={user?.displayName || ""} readOnly name="user_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="roomNumber">Room Number</label>
                            <input
                                id="roomNumber"
                                type="text"
                                value={selectedItem ? selectedItem.room.roomNumber : ''}
                                readOnly
                                name="room_number"
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="rating">Rating</label>
                            <input id="rating" type="number" value={review.rating} name="rating" onChange={(e) => setReview({ ...review, rating: e.target.value })} min="1" max="5" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="comment">Comment</label>
                            <textarea
                                id="comment"
                                value={review.comment}
                                name="comment"
                                onChange={(e) => setReview({ ...review, comment: e.target.value })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                                rows="3"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default MyBookings;
