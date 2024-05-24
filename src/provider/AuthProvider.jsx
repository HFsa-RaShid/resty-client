import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebaseinfo.config";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
    const [disName,setDisName]=useState('')
    const [photoLink,setPhotoLink] = useState('')

    const createUser = (email,password) =>{
        setLoading(true);
        // return createUserWithEmailAndPassword(auth,email,password);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,photoUrl)=>{
      
     
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          })
      }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            console.log('observing current provider',currentUser);
            setLoading(false);

            // if user exists then issue a token
            if(currentUser){
                
                axios.post('https://resty-server.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('https://resty-server.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res =>{
                    console.log(res.data)
                })

            }
        });
        return () =>{
            unSubscribe();
        }

    },[])
    const handleName=(name)=>{
        return setDisName(name)
      }
      const handleImage =(photoUrl)=>{
          return setPhotoLink(photoUrl)
      }


    const authInfo = {user,createUser,signInUser,logOut,loading,handleName,disName,photoLink,handleImage,updateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}