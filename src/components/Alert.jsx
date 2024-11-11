import React from 'react';

const Alert = ({ type, message }) => {
  // Determine classes based on alert type
  const alertClasses = `p-4 mb-4 text-sm rounded-lg ${
    type === 'info'
      ? 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
      : type === 'error'
      ? 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400'
      : ''
  }`;

  return (
    <div className={alertClasses} role="alert">
      <span className="font-medium">
        {type === 'info' ? '' : 'Warning!'}
      </span>{' '}
      {message}
    </div>
  );
};

export default Alert;


// import Alert from '../components/Alert';

// {alertMessage !== null &&  <Alert type={alertMessage.type} message={alertMessage.message} />}


// setAlertMessage({message: error.response.data.message, type: 'error'})



  // -------- Alert Section ------------- //
  // -------- Alert Section ------------- //


                //   const [alert, setAlert] = useState(false)
                //   const [alertMessage, setAlertMessage] = useState(null)
                    
                //   useEffect(() => {

                //     if(alertMessage !== null) {
                //       setTimeout(() => {
                //         setAlertMessage(null)
                //         setAlert(false)
                //       }, 2000)
                //     }

                //   }, [alertMessage, alert])


  // --------- End Of Alert Section ------------ //
  // --------- End Of Alert Section ------------ //
