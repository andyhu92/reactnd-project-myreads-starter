import React from 'react'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook'
import ListBook from './ListBook'
import './App.css'

class BooksApp extends React.Component {

  render() {

    return (
      <div className="app">
       <Route exact path="/" render={() => (
            <ListBook/>
        )}/>

        <Route exact path="/search" render={() => (
            <SearchBook/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
