import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { NavLink, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../assets/Proxy';
import { jwtDecode } from 'jwt-decode';
import Alert from '../components/Alert';

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    role: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault()

    if(!formData.email || !formData.name){
        return alert('Pls all inputs')
    }

    if(formData.password !== formData.confirmPassword){
        return alert('Passwords do not match')
    }

    const { name, email, password, role, address, contact } = formData

    const mainData = { name, email, password, role, address, contact }

    axios.post(`${API_BASE_URL}/user/register`, mainData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response)

      const { token, user } = response.data

      if(token !== null && user){

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        console.log('User ID:', userId);

        navigate('/my-profile')
        
        localStorage.setItem('frm_token', userId)
        
        alert('Account Created')
     
      }else {
        return alert('Error Occured')
      }


    })
    .catch((error) => {
      console.log(error.response)
    })


  };

  return (
    <div>
      <NavBar />
      <div className="flex mt-10 mb-20 items-center justify-center">
        <div className="w-96 p-3 shadow rounded border">
          <form onSubmit={handleSubmit} className="w-80 m-auto">
            <div className="w-full font-bold text-green-600 text-lg font-sans uppercase text-center">
              Register
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="font-semibold bg-green-50 border border-gray-200 p-3 text-xs w-full rounded"
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="font-semibold bg-green-50 border border-gray-200 p-3 text-xs w-full rounded"
              />
            </div>
            <div className="mt-4">
                <select className='w-full rounded border-green-500 p-2 border border-gray-500' onChange={handleChange} name="role" id="" value={formData.role}>
                    <option>Select Role</option>
                    <option value="farmer">farmer</option>
                    <option value="customer">customer</option>
                </select>
              
            </div>
            {/*  */}
            
            <div className="mt-4">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="font-semibold bg-green-50 border border-gray-200 p-3 text-xs w-full rounded"
              />
            </div>
            <div className="mt-4">
              <input
                type="phone"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
                className="font-semibold bg-green-50 border border-gray-200 p-3 text-xs w-full rounded"
              />
            </div>
            {/*  */}
            <div className="mt-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="font-semibold bg-green-50 border border-gray-200 p-3 text-xs w-full rounded"
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="font-semibold bg-green-50 border border-gray-200 p-3 text-xs w-full rounded"
              />
            </div>
            <button
              type="submit"
              className="p-2 text-white rounded font-normal mt-3 bg-green-600 w-full hover:bg-green-700"
            >
              Register
            </button>
            <p className="mt-2 text-center">
              Already have an account?{' '}
              <NavLink className="text-green-600 underline text-sm" to="/login">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
