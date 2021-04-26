import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import BookList from './Components/BookList.js';
import Shelf from './Components/Shelf.js';
import data from './data.js';

function App(){
  return (
    <div className="App">
      <Header />
      <BookList />
      <Shelf />
    </div>
  );
}

export default App;
