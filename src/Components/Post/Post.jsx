
import PropTypes from 'prop-types'
import {  useNavigate } from 'react-router-dom';

function Post({post}) {
    const navigate = useNavigate();

    const {title,body,id} = post;
     
    
     const handleDetails = () => {
         navigate(`/post/${id}`)
     }


  return (
    <div className='mt-6 border-2 shadow-xl bg-green-400 p-6 text-center rounded-2xl'>
      <h5 className='text-xl font-semibold'> <h2 className='text-1xl font-bold'> Post title: </h2> {title}</h5>
      <p className='mt-4 text-xl font-semibold text-white'>Post Body: <small className='flex '> {body}</small></p>
       <button onClick={handleDetails} className='px-4 py-2 bg-yellow-400 rounded-xl mt-4 text-white font-bold'>Click to see details</button>
    </div>
  )
}

Post.propTypes = {

}

export default Post

