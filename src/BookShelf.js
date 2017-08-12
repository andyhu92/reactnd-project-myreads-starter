import React from 'react'
import BookItem from './BookItem'

class BookShelf extends React.Component{
    moveBook = (book) => this.props.onMoveBook(book);

    render() {
        const { title, books } = this.props;

        let isFetching = books.length === 0;
        return (
             <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  {isFetching ?
                  <div>
                       <i className="fa fa-cog fa-spin fa-3x fa-fw"></i> <span>Loading Books...</span>
                  </div>
                  :
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map(book => (
                                <li key={book.id}>
                                    <BookItem book={book} handleMoveBook={this.moveBook}/>
                                </li>
                            ))
                        }
                    </ol>
                  </div>
                  }
                </div>
        )
    }
}

export default BookShelf