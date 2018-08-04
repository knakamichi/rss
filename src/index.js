import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; // add folder names for files created (./ = cd)
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
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

    this.state = {
      videos: [],
      selectedVideo: null
    }; // see search_bar.js

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
      // object for fetching data from API using ES6 ({videos} = {videos: videos} key = property name)
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }



  render () {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300); // throttle when to kick off search function (300 milsec)
    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} // whenever this function is called, change state
          videos = {this.state.videos} />
      </div>
    );
  }
}


// take this component`s generated html and put it on the page (like the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// , 以降：find the div element with the class/id and render the component inside it
//  videolist => passing props to VideoList (this case, the video data)
