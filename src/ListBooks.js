import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  state = {
    // filter: 'currentlyReading'
    // filter: 'wantToRead'
    // filter: 'read'
    filter: 'blank'
  }

  render() {
    const {books} = this.props
    const {filter} = this.state

    let showingBooks
    if (filter !== 'blank') {
      const match = new RegExp(escapeRegExp(filter))
      showingBooks = books.filter((book) => match.test(book.shelf))
    }
    else if (filter === 'blank')  {
      // const match = new RegExp(escapeRegExp(''))
      showingBooks = books.filter((book) => (book.shelf))
    }
    else {
      showingBooks = books
    }

    const bookShelfs = [
      { type: 'currentlyReading', title: 'Currently Reading'},
      {type: 'read', title: 'Read'},
      {type: 'wantToRead', title: 'Want to Read'},
    ]


    // How to list book.authors by mapping
    return (
      <div className="list-books-content">

        {bookShelfs.map((shelf,index) => {

          const shelfBooks = showingBooks.filter( book => book.shelf === shelf.type)
          return (
            <div className="bookshelf" key={index}>
              {shelf.title}
              <BookShelf
                title={shelf.title}
                books={shelfBooks}
              />
            </div>

          )
        })}




        {showingBooks.map((book) => (
          <div className="bookshelf">
            <div className="list-books-title">{book.title}</div>
            <div className="books-authors">
              {book.authors}
              {book.shelf}
            </div>
          </div>
        ))}
        {JSON.stringify(books)}



      </div>
    )






  }

}

export default ListBooks
