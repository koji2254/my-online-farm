import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import NavBar from '../components/NavBar'
import PageTitle from '../components/PageTitle'
import axios from 'axios'
import { API_BASE_URL } from '../assets/Proxy'
import Spinner from '../components/Spinner'



const UpdateProfile = () => {

    const [user, setUser] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      address: '',
      contact: '',
      role: '',
      password: '',
      confirmPassword: ''
    });

    useEffect(() => {
       const frm_token = localStorage.getItem('frm_token')
       if(!frm_token){
        navigate('/login')
       }
 
       setLoading(true)
       axios.get(`${API_BASE_URL}/user/${frm_token}`)
       .then((response) => {
        const userInfo = response.data.user
        setFormData({
            ...formData,
            name: userInfo.name,
            email: userInfo.email,
            role: userInfo.role,
            contact: userInfo.contact,
            address: userInfo.address
          });
          setUser(userInfo);
       })
       .catch((error) => {
          console.log(error.response)
       })
       .finally(() => {
        setLoading(false)
       })
 
    }, [])
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };


  return (
    <div>
    <NavBar />
    <PageTitle title="Update Profile" url='/my-profile' />
     { loading ? <Spinner text='Loading profile data'/> : 
     
  <div class="section mx-2">
     <div class="border w-full md:w-8/12 mt-10 rounded m-auto p-3">
        {/* <div class="img-section flex gap-3">
           <div class="bg-gray-700 rounded-full h-20 w-20 flex justify-center items-center">
              <i class="fa-solid fa-camera text-white"></i>
           </div>
        </div> */}
        <div class="biodata py-3">
           <div class="bg-gray-50 p-2">
              <p class="text-gray-600 text-xs">Full Name</p>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="font-semibold bg-green-50 border border-gray-200 p-3 text-xs mt-1 w-full rounded"
              />
           </div>
           <div class="bg-gray-100 mt-2 p-2">
              <p class="text-gray-600 text-xs">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                disabled
                value={formData.email}
                onChange={handleChange}
                className="font-semibold mt-1 border border-gray-200 p-3 text-xs w-full rounded"
              />
           </div>
           <div class="bg-gray-50 mt-2 p-2">
              <p class="text-gray-600 text-xs">User Category</p>
              <select className='w-full rounded border-green-500 p-2 border border-gray-500' onChange={handleChange} name="role" id="" value={formData.role}>
                    <option>Select Role</option>
                    <option value="farmer">farmer</option>
                    <option value="customer">customer</option>
                </select>
           </div>
           <div class="bg-gray-100 mt-2 p-2">
              <p class="text-gray-600 text-xs">Address</p>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="font-semibold bg-green-50 border border-gray-200 p-3 text-xs w-full rounded"
              />
           </div>
           <div class="bg-gray-50 mt-2 p-2">
              <p class="text-gray-600 text-xs">Phone</p>
              <input
                type="phone"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
                className="font-semibold bg-green-50 border border-gray-200 p-3 text-xs mt-1 w-full rounded"
              />
           </div>
        </div>

         <div class=" flex gap-2 items-center">
           <NavLink to="/update-profile">
              <button class="border p-1.5 rounded bg-green text-white text-sm w-full flex items-center gap-1 flex font-mono justify-center disabled font-bold hover:bg-green-700">Update Profile <i class="fa-solid fa-user"></i></button>
           </NavLink>
           
         </div>
     </div>
  </div>
     }
</div>
  )
}

export default UpdateProfile