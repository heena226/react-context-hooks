import React, { useContext } from 'react'
import { BooksContext } from '../context/BooksContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const {books} = useContext(BooksContext);

    return books.length ? (
      <div className='book-list'>
          <ul>
              {books.map((book) => (
                  <BookDetails book={book} key={book.id} />
              ))}
          </ul>
      </div>
    ) : (
      <div className='empty'>
        No books to read. Hello free time!
      </div>
    )
}

export default BookList