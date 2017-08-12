import React from 'react'

class BookItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            shelf: this.props.book.shelf ? this.props.book.shelf : 'none'
        };
    }

    moveBook(shelf) {
        const { book } = this.props;
        book.shelf = shelf;
        this.props.handleMoveBook(book);
        this.setState({shelf});
    }

    render(){
        const { book } = this.props;
        const { shelf } = this.state;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(e) => this.moveBook(e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
            </div>
        );
    }
}

export default BookItem