import React from 'react'
import NavBar from '../components/NavBar'
import PageTitle from '../components/PageTitle'

const MyProfile = () => {
  return (
    <div>
        <NavBar />
        <PageTitle title="Profile Page" url='/' />
        
      <div class="section mx-2">
         <div class="border w-full md:w-8/12 mt-10 rounded m-auto p-3">
            <div class="img-section flex gap-3">
               <div class="bg-gray-700 rounded-full h-20 w-20 flex justify-center items-center">
                  <i class="fa-solid fa-camera text-white"></i>
               </div>
            </div>
            <div class="biodata py-3">
               <div class="bg-gray-50 p-2">
                  <p class="text-gray-600 text-xs">Full Name</p>
                  <p class="font-bold text-sm">James Koji</p>
               </div>
               <div class="bg-gray-100 mt-2 p-2">
                  <p class="text-gray-600 text-xs">Email</p>
                  <p class="font-bold text-sm">jjameskoji@gmail.com</p>
               </div>
               <div class="bg-gray-50 mt-2 p-2">
                  <p class="text-gray-600 text-xs">User Category</p>
                  <p class="font-bold text-sm">Farmer</p>
               </div>
               <div class="bg-gray-100 mt-2 p-2">
                  <p class="text-gray-600 text-xs">Address</p>
                  <p class="font-bold text-sm mt-1">jos utan</p>
               </div>
               <div class="bg-gray-50 mt-2 p-2">
                  <p class="text-gray-600 text-xs">Phone</p>
                  <p class="font-bold text-sm mt-1">+234 7061856629</p>
               </div>
            </div>

             <div class=" flex gap-2 items-center">
               <a href="./UpdateProfile.html">
                  <button disabled class="border p-1.5 rounded bg-green text-white text-sm w-full flex items-center gap-1 flex font-mono justify-center font-bold hover:bg-green-700">Edit Profile <i class="fa-solid fa-user"></i></button>
               </a>
               <a href="my-farm">
                  <button disabled class="border p-1.5 rounded bg-gray-100 text-green text-sm w-full flex items-center gap-1 flex font-mono justify-center font-bold hover:bg-gray-200">My Farm<i class="fa-solid fa-user"></i></button>
               </a>
               
             </div>
         </div>
      </div>

    </div>
  )
}

export default MyProfile
