import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import ListBooks from './ListBooks'

class App extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false,
    books : ['book1','book2']
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }



  render() {
    return (
      <div className="App">
        <Route
        exact path="/"
        render={() => (
          <ListBooks
            books={this.state.books}
          />
        )}
        />

      </div>
    )
  }

}

export default App
