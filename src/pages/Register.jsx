import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
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

    if(!formData.email || !formData.fullName){
        return alert('Pls all inputs')
    }

    if(formData.password !== formData.confirmPassword){
        return alert('Passwords do not match')
    }

    console.log(formData)
  };

  return (
    <div>
      <NavBar />
      <div className="flex mt-20 items-center justify-center">
        <div className="w-96 p-3 shadow rounded border">
          <form onSubmit={handleSubmit} className="w-80 m-auto">
            <div className="w-full font-bold text-green-600 text-lg font-sans uppercase text-center">
              Register
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
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
