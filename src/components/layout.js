import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../css/main.css'

const layout = ({children}) => {
 return (
  <>
   <Navbar />
   {children}
  </>
 )
}

export default layout
