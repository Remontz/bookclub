// import React, {useRef, useState, useEffect} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ViewAllBooks from '../components/ViewAllBooks'
import AddBookForm from '../components/AddBookForm'
import '../styles/nav.css'
import '../styles/footer.css'
import '../styles/home.css'

const Home = (props) => {
  const { linkedIn, gitHub, portfolio} = props;


  return (
    <div className='home'>
      <Nav />
      <div className='gradient'></div>
      <div className='content ocean'>
        <AddBookForm />
        <ViewAllBooks />
      </div>
      <div className='gradient'></div>
      <Footer linkedIn={linkedIn} gitHub={gitHub} portfolio ={portfolio} />
    </div>
  )
}

export default Home