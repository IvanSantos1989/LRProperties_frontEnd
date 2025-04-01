import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Page({ element }) {
  return (
    <>
        <Header />
        {element}
        <Footer />
    </>
  )
}

export default Page