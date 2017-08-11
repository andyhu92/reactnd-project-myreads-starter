import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookItem from './BookItem'

class SearchBook extends React.Component {
    state = {
        query:"",
        books:[]
    };

    updateQuery(query){
        this.setState({
            query
        });

        BooksAPI.search(query, 10)
            .then(books => {
                if(!books.error){
                    this.setState({
                        books
                    });
                }
            });

    }

    render() {
        const { books } = this.state;
        console.log(books);
        return (
             <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input value={this.state.query} type="text" placeholder="Search by title or author" onChange={(e) => this.updateQuery(e.target.value)}/>

                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map(book => (
                            <BookItem book={book} key={book.id}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook