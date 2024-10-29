import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'

function User({user}) {
    const navigate = useNavigate();

    const {id,name,email,phone} = user;

    const handleDetails = () => {
        navigate(`/user/${id}`)
    }
  return (
    <div className='text-center border-2 shadow-lg rounded-lg p-5 mt-6'>
      <h2 className='text-green-600 mt-4 text-2xl font-bold'>Name: {name}</h2>
      <p className='text-blue-600'>Email: {email}</p>
      <p className='text-red-600'>Phone: {phone}</p>
      <button onClick={handleDetails} className='px-4 py-2 bg-yellow-300 rounded-lg mt-3 font-bold'>Show Details</button>
    </div>
  )
}

User.propTypes = {

}

export default User

