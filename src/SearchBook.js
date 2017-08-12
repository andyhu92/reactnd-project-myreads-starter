import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/sweetalert2/dist/sweetalert2.min.css'
import swal from 'sweetalert2'
import * as BooksAPI from './BooksAPI'
import BookItem from './BookItem'
import BOOKSHELVES_METADATA from './BOOKSHELVES_METADATA'

class SearchBook extends React.Component {
    state = {
        query:"",
        books:[],
        myBooks:[]
    };

    componentDidMount(){
        this.searchInput.focus();
        BooksAPI.getAll().then(myBooks => {
            this.setState({myBooks});
        });
    }

    updateQuery(query){
        this.setState({
            query
        });

        if(query.length === 0) return;
        BooksAPI.search(query, 10)
            .then(books => {
                if(!books.error){
                    this.setState({
                        books
                    });
                } else{
                    this.setState({
                        books:[]
                    })
                }
            });
    }

    moveBook = (bookToMove) => {
        const title = BOOKSHELVES_METADATA.find(m => m.type === bookToMove.shelf).title;
        BooksAPI.update(bookToMove, bookToMove.shelf)
            .then(res => {
                this.setState((prevState) => ({
                    books: prevState.books.map(b => b.id === bookToMove.id ? bookToMove : b)
                }));
                swal({
                    title:"Success!",
                    html:`${bookToMove.title} moved to <strong>${title}</strong> successfully.`,
                    type:"success",
                 });
            })
    }

    render() {
        const { books, myBooks } = this.state;

        return (
             <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input value={this.state.query}
                        ref={(input) => { this.searchInput = input; }}
                        type="text" placeholder="Search by title or author"
                        onChange={(e) => this.updateQuery(e.target.value)}/>
                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            books.map(book => {
                                var myBook =  myBooks.find(b => b.id === book.id);
                                book = myBook ? myBook : book;
                                return <BookItem book={book} key={book.id} handleMoveBook={this.moveBook}/>
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook