import React, { useContext, useState } from 'react'
import { BooksContext } from '../context/BooksContext';

const BookForm = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const {addBook} = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("called button");
    if(title !== "" && author !== "") {
      addBook(title, author);
      setTitle("");
      setAuthor("");
    }
  }

  return (
    <div>
      <form>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter the book title'/>
        <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Enter the book author'/>
        <button onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </div>
  )
}

export default BookForm