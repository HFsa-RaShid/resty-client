
import logo from '../../assets/image/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
     
      <footer className="footer p-10 bg-[#4D7377] text-white font-xl ">
      <aside>
        
      <img src={logo} className="w-[70px] h-[50px]" />
        <p>Providing reliable service since 2024</p>
        <p>Contact: +880 1725768900</p>
        <p>E-mail: resty@gmail.com</p>
      </aside> 
      <nav>
        <h6 className="footer-title">Social</h6> 
        <div className="grid grid-flow-col gap-4 text-white">
          <a href=""><FaLinkedin className='w-6 h-6' /></a>
          <a href=""><FaFacebook className='w-6 h-6' /></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          

        </div>
        <div>
        <p>Copyright © 2024 - All right reserved by RestY</p>
        </div>
      </nav>
    </footer>
    );
};

export default Footer;