import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { NavLink } from 'react-router-dom';
import { API_BASE_URL } from '../assets/Proxy';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    if(!formData.email || !formData.password){
        return alert('Pls all inputs')
    }

    axios.post(`${API_BASE_URL}/login`, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response)

      const { token, message } = response.data

      localStorage.setItem('user_token', response.data)
      alert(message)
    })
    .catch((error) => {
      console.log(error.data.response.message)
    })


  };

  return (
    <div>
      <NavBar />
      <div className="flex mt-10 mb-20 items-center justify-center">
        <div className="w-96 p-3 shadow rounded border">
          <form onSubmit={handleSubmit} className="w-80 m-auto">
            <div className="w-full font-bold text-green-600 text-lg font-sans uppercase text-center">
              Login
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
            <button
              type="submit"
              className="p-2 text-white rounded font-normal mt-3 bg-green-600 w-full hover:bg-green-700"
            >
              Login
            </button>
            <p className="mt-2 text-center">
              Don't have an account?{' '}
              <NavLink className="text-green-600 underline text-sm" to="/register">
                Register
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
