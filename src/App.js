import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BooksContextProvider from './context/BooksContext';

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
