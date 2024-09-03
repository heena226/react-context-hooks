import React, {createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const getBooks = localStorage.getItem('Books');
        return (getBooks ? JSON.parse(getBooks): []);
    });

    useEffect(()=> {
        localStorage.setItem('Books', JSON.stringify(books));
    }, [books]);

    return (
        <BooksContext.Provider value={{books, dispatch}}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;
