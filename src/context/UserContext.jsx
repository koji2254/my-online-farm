import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const UserContext = createContext();

// UserProvider component
export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState(null);
   const [errMsg, setErrMsg] = useState(null);
   const [login, setLogin] = useState(false);
   
   // Function to register user
   const registerUser = (formData) => {
       console.log(formData);
   };
   

   return (
       <UserContext.Provider value={{
           user,
       }}>
           {children}
       </UserContext.Provider>
   );
};

// Custom hook to use UserContext easily
export const useUserContext = () => useContext(UserContext);
