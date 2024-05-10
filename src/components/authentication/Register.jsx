
import { useContext, useState} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import registerBackground from '../../assets/image/slide5.jpg'
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'animate.css';
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
        

    const {createUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photoUrl');
        const password = form.get('password');
        console.log(name,email,photoUrl,password);

        if (password.length < 6) {
            
            alert("Password must be at least 6 characters long.");
            return; 
        }
        else if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+=])[A-Za-z\d!@#$%^&*()-+=]{8,}$/.test(password)){
            alert('Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number.');
            return;

        }
       

        createUser(email,password)
        .then(result => {
            console.log(result.user)
            // UPDATE profile
            updateProfile(result.user,{
                displayName: name,
                photoURL: photoUrl,
            })
            .then(() =>{
                console.log('name,photo added')
            })
            .catch(error => {
                console.error(error)
            })

            toast.success('Registered successfully');
            setTimeout(() => {
                navigate(location?.state ? location.state : '/')
            }, 1000);
        })
        .catch(error => {
            console.error(error);
            toast.error('already have an account');
            
        });
    }
    return (
        <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${registerBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        <Helmet>
                <title>Register | RestY</title>
        </Helmet>

            <div className="hero-content flex-col w-[400px] md:w-[500px] animate__animated animate__zoomIn ">
            
                <h1 className="text-4xl font-bold text-white">Register Here!</h1>
            
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-black opacity-95 border">
                    <form className="card-body " onSubmit={handleRegister} >
                        <div className="form-control">
                            <label className="label">
                                 <span className="label-text font-bold text-white">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Photo URL</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="Enter Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Password</span>
                        </label>
                        <div className="flex relative">
                    
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered w-full" required />

                            <button type="button" className="absolute right-3 top-4" onClick={() => setShowPassword(!showPassword)} >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-bold text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                        <button className="btn bg-black text-white font-bold">Register</button>
                        </div>
                
            
                    </form>
                    <p className="text-center text-white mb-5">Already have an account? Please <Link to="/login">
                        <button className="text-blue-400 underline font-bold">SignIn</button>
                    </Link></p>
                </div>
            </div>
        <ToastContainer />
       
    </div>
        
    );
};

export default Register;
