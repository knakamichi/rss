import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; // add folder names for files created (./ = cd)
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBGdgzi6l9S4FCX84hUrOh2SAIufwfZhL8'; // api generated for browser

// // New component (should produce some html)
// const App = function () {
//   return <div> Hi! </div>;
// }

// // above code using ES6 syntax (functional component)
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// class-based component (Youtube側のデータ変更を常に反映したい)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] }; // see search_bar.js
    // object for fetching data from API using ES6 ({videos} = {videos: videos} key = property name)
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
    });

  }

  render () {
      return (
        <div>
          <SearchBar />
          <VideoList videos = {this.state.videos} />
        </div>
      );
  }
}


// take this component`s generated html and put it on the page (like the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// , 以降：find the div element with the class/id and render the component inside it
//  videolist => passing props to VideoList (this case, the video data)
