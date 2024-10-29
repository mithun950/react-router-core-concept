
import PropTypes from 'prop-types'
import { useLoaderData, useNavigate } from 'react-router-dom'

function UserDetails() {
   
    const user = useLoaderData();

    const navigate = useNavigate();

    const {name,email} = user;

    const handleGoBack = () => {
        navigate(-1)
    }
  return (
    <div className='text-center mt-10 mb-6'>
    
      <h3 className='text-green-600'>Details About user: {name}</h3>
      <p>Email: {email}</p>

      <button className=' px-4 py-2 bg-yellow-400 rounded-lg mt-4 font-bold' onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

UserDetails.propTypes = {

}

export default UserDetails

