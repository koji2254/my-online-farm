import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { NavLink, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../assets/Proxy';
import { jwtDecode } from 'jwt-decode';
import LoadingBtn from '../components/LoadingBtn';
import Alert from '../components/Alert';

const Login = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  
  // Set Formdata to initial Information 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  // -------- Alert Section ------------- //
  // -------- Alert Section ------------- //
  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null)
    
  useEffect(() => {

    if(alertMessage !== null) {
      setTimeout(() => {
        setAlertMessage(null)
        setAlert(false)
      }, 2000)
    }

  }, [alertMessage, alert])


  // --------- End Of Alert Section ------------ //
  // --------- End Of Alert Section ------------ //


  // On change of the input feilds
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // After Submitting the form data 
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!formData.email || !formData.password){
        return alert('Pls all inputs')
    }

    setLoading(true)
    axios.post(`${API_BASE_URL}/user/login`, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response)

      const { token, message } = response.data

      if(message === 'Login successfully' && token !== null){

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        localStorage.setItem('frm_token', userId)
        
        setAlertMessage({message, type: 'info'})
        setAlert()
        
        navigate('/my-profile')
     
      }else {
        return alert('Error Occured')
      }
    })
    .catch((error) => {
      setAlertMessage({message: error.response.data.message, type: 'error'})
      console.log(error.response.data.message)
    })
    .finally(() => { 
      setLoading(false)
    })
  }; // End of submit function 


  return (
    <div>
      <NavBar />
      {/* <Alert type='info' message='Welcom Onboard'/> */}
      {alertMessage !== null &&  <Alert type={alertMessage.type} message={alertMessage.message} />}
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
              { loading ? <LoadingBtn /> : 'Login' }
              
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
