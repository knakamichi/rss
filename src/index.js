import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; // add folder names for files created (./ = cd)

const API_KEY = 'AIzaSyBGdgzi6l9S4FCX84hUrOh2SAIufwfZhL8'; // api generated for browser

// New component (should produce some html)

// const App = function () {
//   return <div> Hi! </div>;
// }

// above code using ES6 syntax
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this component`s generated html and put it on the page (like the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// , 以降：find the div element with the class/id and render the component inside it
