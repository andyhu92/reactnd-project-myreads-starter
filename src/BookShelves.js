import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import BOOKSHELVES_METADATA from './BOOKSHELVES_METADATA'

class BookShelves extends React.Component{
    state = {
        books:[]
    }

    categories = BOOKSHELVES_METADATA;

    componentDidMount(){
        BooksAPI.getAll().then(books => {
            this.setState({books})
        });
    }

    getBooksByCategory(type){
        return this.state.books.filter(book => book.shelf === type);
    }

    moveBook = (bookToMove) => {
        BooksAPI.update(bookToMove, bookToMove.shelf)
            .then(res => this.setState((prevState) => ({
                books: prevState.books.map(b => b.id === bookToMove.id ? bookToMove : b)
            })), err => alert("error updating book")
        );

    }

    render(){
        return (
            <div>
                {
                    this.categories.map(c => (
                        <BookShelf
                            key={c.type}
                            title={c.title}
                            onMoveBook={this.moveBook}
                            books={this.getBooksByCategory(c.type)}/>
                    ))
                }
            </div>
        );
    }
}

export default BookShelves