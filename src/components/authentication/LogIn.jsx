import { useContext,  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import registerBackground from '../../assets/image/slide5.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'animate.css';
import { Helmet } from "react-helmet";

import app from "../../Firebase/firebaseinfo.config";
import { AuthContext } from "../../provider/AuthProvider";



const LogIn = () => {

            const {signInUser}=useContext(AuthContext)
            const [showPassword, setShowPassword] = useState(false);
            const location = useLocation();
            const navigate = useNavigate();

        // google login start
        const [user,setUser] =useState(null);
        const auth = getAuth(app);
        const googleProvider = new GoogleAuthProvider();
        const handleGoogleLogIn =() =>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        setUser(loggedInUser);
        toast.success('Logged In successfully');
        setTimeout(() => {
            navigate(location?.state ? location.state : '/')
        }, 1000);
        
    })
    .catch(error =>{
        console.log('error',error.message);
    })

  }
//   google login end

// github login start
const githubProvider = new GithubAuthProvider();
const handleGithubLogIn = () =>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
        const loggedUser = result.user;
        // console.log(loggedUser);
        setUser(loggedUser);
        toast.success('Logged In successfully');
        setTimeout(() => {
            navigate(location?.state ? location.state : '/')
        }, 1000);
    })
    .catch(error =>{
        console.log('error',error.message);
    })
}
// github login end

//email & password  

  const handleLogin = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');
    // console.log(email,password);

    signInUser(email,password)
    .then(result =>{
        console.log(result.user);
        toast.success('Logged In successfully');
        setTimeout(() => {
            navigate(location?.state ? location.state : '/')
        }, 1000);
        
    })
    .catch(error =>{
        console.error(error)
        toast.error('Invalid email or password. Please try again.')
        
    })
      
  }


    return (
      <div className="hero " style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${registerBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Helmet>
                <title>Sign In | RestY</title>
        </Helmet>
        
        <div className="hero-content flex-col w-[400px] md:w-[500px] ">
          
          <h1 className="text-5xl font-bold text-white">Sign In now!</h1>
          
          <div className="card animate__animated animate__zoomIn shrink-0 w-full max-w-sm shadow-2xl bg-black opacity-95 border">
          <form className="card-body" onSubmit={handleLogin} >
              <div className="form-control">
              <label className="label">
                  <span className="label-text font-bold text-white">Email</span>
              </label>
              <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
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
              <button className="btn bg-black text-white font-bold">Sign In</button>
              </div>
              
              <p className="text-center font-bold text-white">OR</p>
              <div className="flex justify-around">
                <div className="border flex py-2 px-3 bg-black text-white rounded-xl gap-3 items-center w-[45%] pl-7">
                    <FcGoogle />
                    <button onClick={handleGoogleLogIn} className="font-bold text-[18px]">Google</button>
                </div>
                <div className="border flex py-2 px-3 bg-black text-white rounded-xl gap-3 items-center w-[45%] pl-7">
                    <FaGithub />
                    <button onClick={handleGithubLogIn} className="font-bold text-[18px]">Github</button>

                </div>
                    
                    
              </div>
              
          </form>
          
          <p className="text-center text-white mb-5">New to RestY? Please <Link to="/register">
              <button className="text-blue-400 underline font-bold">Register</button>
          </Link></p>
          </div>
          
      </div>
      
      <ToastContainer />
      
  </div>
    );
};

export default LogIn;