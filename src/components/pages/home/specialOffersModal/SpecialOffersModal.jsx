
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa'; 
import logo from '../../../../assets/image/logo.png'
import { Link } from 'react-router-dom';
Modal.setAppElement('#root');

const SpecialOffersModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="relative bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        className="relative bg-cover bg-center p-8 rounded-lg shadow-lg w-full"
        style={{ backgroundImage: `url('https://i.ibb.co/qjTK1nw/360-F-303114640-6-T1y-BVn3h-Hi-T3m1g-Gkrp-LKNe2-ICNt-RMp.jpg')` }} 
        
      >
 
        <button
          onClick={onRequestClose}
          className="absolute top-3 right-3 text-gray-300"
          aria-label="Close"
        >
          <FaTimes className="h-6 w-6" />
        </button>

        <div className=''>
            <img src={logo} className='w-20 h-16 mx-auto '  />
            
        </div>
            
            <div className="mx-auto text-center text-white">
                    <div>
                            <h2 className="text-xl font-bold mb-1 text-white">Time to unwind?</h2>
                            <p className='text-xl font-bold'>Book now & you'll get </p>
                                <p className="mt-1 text-4xl font-bold">20% off </p>
                                <p className='text-xl font-semibold'>Use this code at checkout to unlock your savings</p>
                                <button className='border border-dashed p-2 font-bold text-2xl my-2'>SAVENOW</button>
                                <p className='text-sm w-[80%] mx-auto'>Apply coupon code to qualifying pre-paid standalone hotel bookings on www.resty.com</p>
                  
                           <div className='flex gap-2 ml-[20%]'>
                           <Link className='underline'>Click here </Link>
                            <p className=''> for full terms & conditions.</p>
                           </div>

                           <p className="mt-2">Exclusive deals for members.</p>

                           
                    </div>
                   
                <div>
                
                
                </div>
            </div>
      </div>
    </Modal>
  );
};

export default SpecialOffersModal;
