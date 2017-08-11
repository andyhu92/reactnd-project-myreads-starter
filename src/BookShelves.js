import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class BookShelves extends React.Component{
    state = {
        books:[]
    }

    categories = [
        {
            type:"currentlyReading",
            title:"Currently Reading"
        },
        {
            type:"wantToRead",
            title:"Want to Read"
        },
        {
            type:"read",
            title:"Read"
        }
    ];

    componentDidMount(){
        BooksAPI.getAll().then(books => {
        console.log(books);
        this.setState({books})
        });
    }

    getBooksByCategory(type){
        return this.state.books.filter(book => book.shelf === type);
    }

    render(){
        return (
            <div>
                {
                    this.categories.map(c => (
                        <BookShelf key={c.type} title={c.title} books={this.getBooksByCategory(c.type)}/>
                    ))
                }
            </div>
        );
    }
}

export default BookShelves