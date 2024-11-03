import React from 'react'
import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <NavBar />
        <div className="flex mt-10 mb-20 items-center justify-center">
            <div className="w-96 p-3 shadow rounded border">
                <form action="" className='w-80 m-auto'>
                    <div className="w-full font-bold text-green-600 text-lg font-sans uppercase text-center">Login</div>
                    <div className="mt-4">
                        <input type="email" placeholder='Email' className='font-semibold bg-green-50 border border-gray-200 p-3 text-xs w-full rounded'/>
                    </div>
                    <div className="mt-4">
                        <input type="password" placeholder='Password' className='font-semibold bg-green-50 border border-gray-200 p-3 text-xs w-full rounded'/>
                    </div>
                    <button className='p-2 text-white rounded font-normal mt-3 bg-green-600 w-full hover:bg-green-700'>
                        Register
                    </button>
                    <p className='mt-2 text-center'>Dont't have an account ? <NavLink className='text-green-600 underline text-sm' to='/register'>Register</NavLink></p>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Login
