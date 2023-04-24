import React from 'react'
import DARK_DAYS from '../testPDFs/Dark_Days.pdf'
import AMONG_US from '../testPDFs/Among Us I.pdf'
import INTO_THE_UNKNOWN from '../testPDFs/Into the Unknown.pdf'
import STAR_CHILD from '../testPDFs/Star Child.pdf'
import THE_ORDER from '../testPDFs/The Order I.pdf'

const ViewAllBooks = () => {
    const books = [
        {
        title: 'Dark Days',
        file: {DARK_DAYS},
        favoritedBy: ['user1', 'user2', 'Admin'],
        author: 'Admin',
        dateCreated: '20-APR-2023',
        lastUpdate: '10:45:22 21-APR-2023',
        description: 'This is a test description for a test book.  The backend will hold this model, and call this data.'
      },
        {
        title: 'Among Us',
        file: {AMONG_US},
        favoritedBy: ['user2', 'Admin'],
        author: 'Admin',
        dateCreated: '20-APR-2023',
        lastUpdate: '10:45:22 21-APR-2023',
        description: 'This is a test description for a test book.  The backend will hold this model, and call this data.'
      },
        {
        title: 'Into the Unknown',
        file: {INTO_THE_UNKNOWN},
        favoritedBy: ['user1', 'user90', 'user4'],
        author: 'Admin',
        dateCreated: '20-APR-2023',
        lastUpdate: '10:45:22 21-APR-2023',
        description: 'This is a test description for a test book.  The backend will hold this model, and call this data.'
      },
        {
        title: 'Star Child',
        file: {STAR_CHILD},
        favoritedBy: ['user2'],
        author: 'Admin',
        dateCreated: '20-APR-2023',
        lastUpdate: '10:45:22 21-APR-2023',
        description: 'This is a test description for a test book.  The backend will hold this model, and call this data.'
      },
        {
        title: 'The Order',
        file: {THE_ORDER},
        favoritedBy: [],
        author: 'Admin',
        dateCreated: '20-APR-2023',
        lastUpdate: '10:45:22 21-APR-2023',
        description: 'This is a test description for a test book.  The backend will hold this model, and call this data.'
      }
    ]
    const handleAddToFavorites = (index) => {
        books[index].favoritedBy.push('Admin');
    }
  return (
    <section>
        <h3> Library </h3>
        <ul>
            {books.map((book, index) => {
                return( 
                <li>
                    <h4>{book.title}</h4>
                    <p><span>Author:</span> {book.author}</p>
                    {
                        (book.favoritedBy !== null ) && (book.favoritedBy.includes('Admin')) ? (<p>This is one of your favorites</p>) : (<button onClick={handleAddToFavorites(index)}>Add to Favorites</button>)
                    }
                </li>)
            })}
        </ul>
    </section>
  )
}

export default ViewAllBooks