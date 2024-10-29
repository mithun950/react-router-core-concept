
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
        <Header></Header> 
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

Home.propTypes = {

}

export default Home

