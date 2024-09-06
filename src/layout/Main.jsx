
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import LoadinSpiner from '../components/LoadinSpiner'


const Main = () => {

    const { loading } = useContext(AuthContext);

    return (

        <div className='bg-primaryBG'>
            {
                loading ? <LoadinSpiner></LoadinSpiner> : <div>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            }

        </div>
    )
}

export default Main
