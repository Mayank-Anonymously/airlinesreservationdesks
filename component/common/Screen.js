import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Screen = ({ children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Screen
