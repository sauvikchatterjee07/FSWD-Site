import React from 'react';
import { useState } from 'react';
import { MdAlternateEmail } from 'react-icons/md';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FaFingerprint } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordView = () => setShowPassword(!showPassword);

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-md shadow-slate-500 shadow-lg backdrop-blur-lg'>
        <img
          src='https://s3-alpha-sig.figma.com/img/aec2/032b/5d71ddc4f26fb8a4183dfe70e3dea2b8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kcal5oPAqY8EVhxI0sQXYp3lHEcwCNynWpAdN4oYj3nQF5o0DP8CHOhac~pSrwEhchhLZtnocjLYmxDaIm3TNJFgfkHsZwCnrywwcQj7JkGXZN7ARpHeSaCapfR-R~b~NRmnJoKmW5wu~WN4KoXnt65waRmuXbVp8chPZnEJ2UsJAGk5d6SM9wKyHheRrrVge1QT0oEG0UuzlZztcWT54vVgxLcplVdJe4dS3BeVJ3i4BEIyuG0MOJJ6sG9csRT2bU9SxnZL2ZtbFr4fcZJv6FrRg0qUT3F4tFBOFTqS5Y-h9V3b5VlkCOVTu7RycD5QLauQlhxDg5dTuMX5cQDB4w'
          alt=''
          className='w-18 md:w-20'
        />

        <h1 className=' md:text-xl font-medium text-2xl'>
          Log in to your account
        </h1>

        <p className='text-xs md:text-sm text-gray-500 text-center'>
          Don't have an account?{' '}
          <a className='text-purple-700 cursor-pointer'>Sign up now</a>
        </p>

        {/* icons for */}
        <div className='w-full flex flex-col gap-3'>
          <div className='w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2'>
            <MdAlternateEmail />
            <input
              type='email'
              placeholder='Email'
              className='bg-transparent border-0 w-full outline-none text-sm md:text-base'
            />
          </div>

          <div className='w-full flex items-center bg-gray-800 p-2 rounded-xl relative gap-2'>
            <FaFingerprint />
            <input
              type={showPassword ? 'password' : 'text'}
              placeholder='password'
              className='bg-transparent border-0 w-full outline-none text-sm md:text-base'
            />

            {showPassword ? (
              <FaRegEyeSlash
                className='absolute right-5 cursor-pointer'
                onClick={togglePasswordView}
              />
            ) : (
              <FaRegEye
                className='absolute right-5 cursor-pointer'
                onClick={togglePasswordView}
              />
            )}
          </div>
        </div>

        {/* login button */}
        <div className='w-full items-center bg-purple-500 p-1 rounded-md text-center hover:bg-purple-950 cursor-pointer '>
          <button className='text-white font-bold text-sm'>Log in</button>
        </div>

        {/* OR */}
        <div className='relative w-full flex items-center justify-center py-3'>
          <div className='w-2/5 h-[2px] bg-gray-800'></div>
          <h3 className='font-lora text-xs md:text-sm px-4 text-gray-500'>
            Or
          </h3>
          <div className='w-2/5 h-[2px] bg-gray-800'></div>
        </div>
        {/* OR */}

        <div className='realtive w-full flex items-center justify-between py-3'>
          <div className='p-2 md:px-5 bg-black cursor-pointer rounded-xl hover:bg-purple-700 shadow-slate-500 shadow-sm'>
            <BsApple className='text-lg md:text-xl' />
          </div>

          <div className='p-2 md:px-5 bg-black cursor-pointer rounded-xl hover:bg-purple-700 shadow-slate-500 shadow-sm'>
            <FcGoogle className='text-xl md:text-xl' />
          </div>

          <div className='p-2 md:px-5 bg-black cursor-pointer rounded-xl hover:bg-purple-700 shadow-slate-500 shadow-sm'>
            <FaXTwitter className='text-xl md:text-xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
