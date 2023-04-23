import React, {useRef, useState, useEffect} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import darkDays from '../testPDFs/Dark_Days.pdf'
import '../styles/nav.css'
import '../styles/footer.css'

const Home = (props) => {
  const { linkedIn, gitHub, portfolio} = props;
  const testBook = {
        title: 'Test Book',
        url: {darkDays},
        favoritedBy: [userRef],
        author: userRef,
        dateCreated: '20-APR-2023',
        lastUpdate: '10:45:22 21-APR-2023',
        description: 'This is a test description for a test book.  The backend will hold this model, and call this data.'
    }
  console.log(userRef)
  console.log(linkedIn);
  console.log(gitHub);
  console.log(portfolio);
  console.log(testBook);
  return (
    <div>
      <Nav />
      <Footer linkedIn={linkedIn} gitHub={gitHub} portfolio ={portfolio} />
    </div>
  )
}

export default Home