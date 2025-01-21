import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import './Landing.css'
import svg from "../assets/bg-svg.svg"
import axios from 'axios';

function Landing() {
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        
        axios.get("http://localhost:3000/me", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
           alert("You are already logged in as" + res.data.decodedValue.firstName + "Log out and switch to a new user")
           navigate("/dashboard")
        })
    },[])
    return (
    <>
    <Header/>
   
   <div className='flex justify-center bg-yellow-50 h-screen' style={{
        background : `url(${svg}) no-repeat center / cover `
   }}>
        <div className='m-10 bg-neutal-500 rounded-lg h-2/5 lg:w-96 shadow-2xl'>
            <h1 className='text-3xl m-8 font-medium text-yellow-500 text-center '>Welcome to paytm – your gateway to seamless payments and an incredible learning experience!</h1>
            <div className='flex justify-evenly m-8 pb-10 py-4'>
            <p className=' text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-5 me-2 mb-2 text-xl dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
                <Link to="/signup">Signup</Link></p> 
            <p className='mx-4 border-black bg-yellow-500 hover:bg-slate-300 text-xl font-medium px-5 py-5 me-2 mb-2 rounded-full'><Link to="/signin">Signin</Link></p>
            </div>
        </div>
   </div>
   </>
  )
}

export default Landing
