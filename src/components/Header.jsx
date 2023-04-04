import React, { useState } from 'react'
import {motion } from 'framer-motion'
import { MdShoppingBasket,MdAdd,MdLogout } from "react-icons/md";
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import {Link} from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config"
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


 const Header = () => {

        const firebaseAuth =getAuth(app);
        const provider=new GoogleAuthProvider()
        const [{user},dispatch]=useStateValue()
        const [isMenu,setisMenu] = useState(false)

    const login=async()=>{
      if(!user){
        const {user:{refreshToken,providerData},} =await signInWithPopup(firebaseAuth,provider)
        dispatch({
            type:actionType.SET_USER,
            user:providerData[0]
        })
        localStorage.setItem('user',JSON.stringify(providerData[0]))
      }else{
        setisMenu(!isMenu)
      }
    }

   return (
     <header className='fixed z-50 w-screen p-5 px-16'>
        {/* DESKTOP VERSION */}
        <div className='hidden md:flex w-full h-full items-center justify-between '>
            
            <Link to={"/"} className='flex items-center gap-2'>
            <img src={Logo} className='w-12 object-cover' alt="LOGO" />
            <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>

            <div className='flex items-center gap-8'> 
                 <motion.ul initial={{opacity:0,x:200}} 
                 animate={{opacity:1,x:0}} 
                 exit={{opacity:0,x:200}} 
                 className='flex items-center gap-7'>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer font-bold'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer font-bold'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer font-bold'>About Us</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer font-bold'>Service</li>
            </motion.ul>
            <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-textColor text-3xl   cursor-pointer'/>
            <div className='absolute -top-3.5 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'> 2</p>
            </div>
            </div> 
          <div className='relative'>
          <motion.img whileTap={{scale:0.5}} src={user?user.photoURL:Avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer 
          rounded-full' alt="user" onClick={login} />
        
        {isMenu && (
           <motion.div 
           initial={{opacity:0,scale:0.6}}
           animate={{opacity:1,scale:1}} 
           exit={{opacity:0,scale:0.6}} 
            className='w-40 bg-gray-70 shadow-xl rounded-lg flex-col absolute top-12 right-1 ' >
           {user && user.email==="souravmisra4125@gmail.com" && (
             <Link to={"/createItem"}>
               <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd/></p>
             </Link>
           )}
           <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>LogOut <MdLogout/> </p>
      </motion.div>
        )}
          </div>
            </div>
        </div>
        

        {/* MOBILE VERSION */}
        <div className='flex md:hidden w-full h-full '>
        <Link to={"/"} className='flex items-center gap-2'>
            <img src={Logo} className='w-12 object-cover' alt="LOGO" />
            <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>
        </div>

     </header>
   )
 }
 
 export default Header