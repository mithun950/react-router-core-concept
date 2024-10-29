
import PropTypes from 'prop-types'
import { useLoaderData, useNavigate } from 'react-router-dom'

function PostDetails() {
    const postDetails = useLoaderData();
    const navigate = useNavigate()
    const {title,id} = postDetails;


    const handleGoBack = () => {
           navigate(-1)
    }
  return (
    <div className='mt-4 text-center'>
      
       <h3 className='text-3xl font-semibold mt-3'>Post id : {id}</h3>
      <h4 className='mt-3'>Title: {title}</h4>

      <button onClick={handleGoBack} className='px-4 py-2 rounded-xl bg-green-500 mt-4 font-bold'>Go back</button>
    </div>
  )
}

PostDetails.propTypes = {

}

export default PostDetails

