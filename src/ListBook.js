import React from 'react'
import { Link } from 'react-router-dom'
import BookShelves from './BookShelves'

class ListBook extends React.Component{
    render() {
       return (
         <div className="list-books">
           <div className="list-books-title">
             <h1>MyReads</h1>
           </div>
           <div className="list-books-content">
              <BookShelves/>
           </div>
           <div className="open-search">
              <Link to="/search" title="Add a book">Add a book</Link>
            </div>
         </div>
       );
    }
}

export default ListBook