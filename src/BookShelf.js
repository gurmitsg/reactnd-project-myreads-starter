import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'

class BookShelf extends Component {
  render() {
    const {title,books} = this.props
    console.log(books)

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {title}</h2>

      </div>

    )

  }


}

export default BookShelf
