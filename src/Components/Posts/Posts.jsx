import Post from '../Post/Post';
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'

function Posts(props) {

    const posts = useLoaderData();
    
  return (
    <div className='w-11/12 mx-auto grid-cols-1 sm: grid grid-cols-2 lg:grid-cols-3 gap-5'>
     {
        posts.map((post) => <Post key={post.id} post={post}></Post>)
     }
    </div>
  )
}

Posts.propTypes = {

}

export default Posts

