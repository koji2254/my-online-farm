const submitUpdate = document.getElementById('submit-update')
const fullName = document.getElementById('full-name').value.trim()
const email = document.getElementById('email').value.trim()
const category = document.getElementById('category').value.trim()
const address = document.getElementById('address').value.trim()
const phone = document.getElementById('phone').value.trim()
const profileImg = document.getElementById('profile-img').files[0]

let token = '2345678765432fksfkskdkskdks'



const updateUserProfile = (userProfile) => {
   axios.put('/update-profile', userProfile, {
      headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'multipart/form-data'
      }
   })
   .then((response) => {
      console.log(response)
   })
   .catch((error) => {
      console.log(error)
   })
   .finally(() => {
      console.log('done')
   })
}

submitUpdate.addEventListener('click', (e) => {
   e.preventDefault()

   const userProfile = {
      fullName: fullName,
      email: email,
      category: category,
      address: address,
      phone: phone,
      profileImg: profileImg
   }

   console.log(userProfile)

   const formData = new FormData();

   formData.append('fullName', fullName);
   formData.append('email', email);
   formData.append('category', category);
   formData.append('address', address);
   formData.append('phone', phone);

   if (profileImg) {
      formData.append('profileImg', profileImg);
   }


   updateUserProfile(formData)
})