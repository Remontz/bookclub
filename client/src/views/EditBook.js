import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const EditBook = (props) => {
  const { linkedIn, gitHub, portfolio} = props;
  return (
    <div>
      <Nav />
      <div className='gradient'></div>
      <div className=''>
        EDITBOOK
      </div>
      <div className='gradient'></div>
      <Footer linkedIn={linkedIn} gitHub={gitHub} portfolio ={portfolio} />
    </div>
  )
}
export default EditBook