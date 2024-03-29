import React, { useState } from 'react';
import Header from './Header'

const Login = () => {

  const [isSignInform, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
         <h1 className='font-bold text-3xl py-4'>{isSignInform ? "Sign In" : "Sign Up"}</h1>
         {!isSignInform && (
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
         <input
           type="text"
           placeholder= "Email Address"
           className="p-4 my-4 w-full bg-gray-700"
         ></input>
         <input
            type = "password"
            placeholder='Enter Your Password'
            className='p-4 my-4 w-full bg-gray-700'>
         </input>
         <button className='p-5 my-5 bg-red-700 w-full rounded-lg'>Sign In</button>
         <p 
           className='py-4 cursor-pointer' onClick = {toggleSignInForm}>
           {isSignInform ? "New to Netflix? Sign Up Now!" : "Already registerd? Sign In Now"}
        </p>
        </form>
    </div>
  );
};

export default Login
