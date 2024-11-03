import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className="p-4 border flex justify-between">
      <div className="flex items-center gap-2">
         
         <h1 className="font-extrabold text-xl text-green uppercase font-mono">Farmers</h1>
      </div>
      
      <div className="flex gap-1 items-center">
        <NavLink to='/my-profile'>
            <button className="font-bold text-xs p-2 px-1 text-gray-900 flex gap-1 items-center">
                <i class="fa-solid fa-user"></i>
                Profile
            </button>
        </NavLink>
        <NavLink to='/login'>
            <button className="font-bold text-xs p-2 px-1 text-gray-900">Login</button>
        </NavLink>
        <NavLink to='/login'>
         <button className="bg-gray-100 rounded-full font-bold text-xs p-2 px-1 text-gray-900 text-red-600">Logout</button>
        </NavLink>
         
      </div>
   </nav>

   {/* <nav className="buttom-nav border-t sm:hidden">
      <div className="flex justify-between items-center gap-2 px-3">
         <div className="bottom-nav-card flex flex-col items-center p-2 rounded bg-gray-100 w-full hover:text-green-500 cursor-pointer">
            <i className="fa-solid fa-store"></i>
            <h5 className="text-xs p-1">Shop</h5>
         </div>
         <div className="bottom-nav-card flex flex-col items-center p-2 rounded bg-gray-100 w-full hover:text-green-500 cursor-pointer">
            <i className="fa-brands fa-wpexplorer"></i>
            <h5 className="text-xs p-1">Explore</h5>
         </div>
         <div className="bottom-nav-card flex flex-col items-center p-2 rounded bg-gray-100 w-full hover:text-green-500 cursor-pointer">
            <i className="fa-solid fa-cart-shopping"></i>
            <h5 className="text-xs p-1">Cart <span className="text-red-500">(3)</span></h5>
         </div>
         <div className="bottom-nav-card flex flex-col items-center p-2 rounded bg-gray-100 w-full hover:text-green-500 cursor-pointer">
            <i className="fa-solid fa-user"></i>
            <h5 className="text-xs p-1">Profile</h5>
         </div>
      </div> 
   </nav> */}
   </>
  )
}

export default NavBar
