import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import NavBar from '../components/NavBar'
import PageTitle from '../components/PageTitle'
import axios from 'axios'
import { API_BASE_URL } from '../assets/Proxy'
import Spinner from '../components/Spinner'

const MyProfile = () => {

   const navigate = useNavigate()
   const [user, setUser] = useState([])
   const [loading, setLoading] = useState(false)
   useEffect(() => {
      const frm_token = localStorage.getItem('frm_token')
      if(!frm_token){
         navigate('/login')
      }

      setLoading(true)
      axios.get(`${API_BASE_URL}/user/${frm_token}`)
      .then((response) => {
         console.log(response.data.user)

         setUser(response.data.user)
      })
      .catch((error) => {
         console.log(error.response)
      })
      .finally(() => {
         setLoading(false)
      })

   }, [])

  return (
    <div>
        <NavBar />
        <PageTitle title="Profile Page" url='/' />
        { loading ? <Spinner text='Loading profile data'/> : 
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
                  <p class="font-bold text-sm">{user.name}</p>
               </div>
               <div class="bg-gray-100 mt-2 p-2">
                  <p class="text-gray-600 text-xs">Email</p>
                  <p class="font-bold text-sm">{user.email}</p>
               </div>
               <div class="bg-gray-50 mt-2 p-2">
                  <p class="text-gray-600 text-xs">User Category</p>
                  <p class="font-bold text-sm">{user.role}</p>
               </div>
               <div class="bg-gray-100 mt-2 p-2">
                  <p class="text-gray-600 text-xs">Address</p>
                  <p class="font-bold text-sm mt-1">{user.address}</p>
               </div>
               <div class="bg-gray-50 mt-2 p-2">
                  <p class="text-gray-600 text-xs">Phone</p>
                  <p class="font-bold text-sm mt-1">{user.contact}</p>
               </div>
            </div>

             <div class=" flex gap-2 items-center">
               <NavLink to="/update-profile">
                  <button class="border p-1.5 rounded bg-green text-white text-sm w-full flex items-center gap-1 flex font-mono justify-center font-bold hover:bg-green-700">Edit Profile <i class="fa-solid fa-user"></i></button>
               </NavLink>
               { user && user.role === 'farmer' ? <a href="my-farm">
                  <button disabled class="border p-1.5 rounded bg-gray-100 text-green text-sm w-full flex items-center gap-1 flex font-mono justify-center font-bold hover:bg-gray-200">My Farm<i class="fa-solid fa-user"></i></button>
               </a> : ''}
             </div>
         </div>
      </div>
   }

    </div>
  )
}

export default MyProfile
