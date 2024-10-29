
import PropTypes from 'prop-types'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom';

function ErrorPage() {

  const error = useRouteError();


  return (
    <div className='text-center mt-40'>
       <h2 className='text-4xl font-semibold mt-4' >Oops!!!</h2>
       <p className='text-red-500 mt-4 text-2xl'>{error.statusText || error.message}</p>
       {
        error.status === 404 && <div>
            <h3>Page not found </h3>
            <p>Go back where you from </p>
            <Link to="/"><button className='px-4 py-2 bg-yellow-400 font-bold rounded-lg mt-5'>Home</button></Link>
        </div>
       }
    </div>
  )
}

ErrorPage.propTypes = {

}

export default ErrorPage

