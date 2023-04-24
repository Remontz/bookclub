// import React, {useRef, useState, useEffect} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import darkDays from '../testPDFs/Dark_Days.pdf'
import '../styles/nav.css'
import '../styles/footer.css'
import '../styles/home.css'

const Home = (props) => {
  const { linkedIn, gitHub, portfolio} = props;
  const testBook = {
        title: 'Test Book',
        url: {darkDays},
        favoritedBy: 'Test User',
        author: 'Admin',
        dateCreated: '20-APR-2023',
        lastUpdate: '10:45:22 21-APR-2023',
        description: 'This is a test description for a test book.  The backend will hold this model, and call this data.'
    }
  // console.log(userRef)
  console.log(linkedIn);
  console.log(gitHub);
  console.log(portfolio);
  console.log(testBook);
  return (
    <div className='home'>
      <Nav />
      <div className='gradient'></div>
      <div>
        <section id="add-book">
          <h3>Add a <span>New Book</span></h3>
          <form>
            <div>
              <label for="new-book">Title:</label>
              <input type="text" id="new-book" name="new-book" required size="10" />
            </div>
            <label for="description">Description:</label>
            <textarea type="text" id="description" name="description" required minlength="5" rows="4" cols="30"></textarea>
            <button type="submit">Add</button>
          </form>
        </section>
      </div>
      <div className='gradient'></div>
      <Footer linkedIn={linkedIn} gitHub={gitHub} portfolio ={portfolio} />
    </div>
  )
}

export default Home