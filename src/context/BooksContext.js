import React, {createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind' , author: 'patrick rothfuss', id: 1},
        {title: 'the way of kings' , author: 'brandon sanderson', id: 2},
        {title: 'the final empire' , author: 'patrick james', id: 3},
        {title: 'the hero of ages' , author: 'some other guy', id: 4},
    ]);
    const addBook = (title, author) => {
        setBooks([
            ...books,
            { title: title, author: author, id: uuidv4() }
        ])
    };
    const removeBook = (id) => {
        setBooks(books.filter((book) => book.id !== id))
    }

    return (
        <BooksContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;
