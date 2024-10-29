
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import User from '../User/User';

function Users() {

    const users = useLoaderData();
  return (
    <div>
      <h2 className='text-center text-4xl mt-7'> Our users {users.length}</h2>
      <div className='grid-cols-1  sm:grid grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto'>
      {
        users.map((user) => <User key={user.id} user={user}></User>)
      }
      </div>
      
    </div>
  )
}

Users.propTypes = {

}

export default Users

