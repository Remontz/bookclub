import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Dashboard = (props) => {
  const { linkedIn, gitHub, portfolio} = props
  return (
    <div className='dash'>
      <Nav />
      <div className='gradient'></div>
      <div className=''>
        DASHBOARD
        <div id='favorites'>favorites</div>
      </div>
      <div className='gradient'></div>
      <Footer linkedIn={linkedIn} gitHub={gitHub} portfolio ={portfolio} />
    </div>
  )
}

export default Dashboard