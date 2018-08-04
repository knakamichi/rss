import React, {Component} from 'react';

// Lesson 15, functional component
// const SearchBar = () => {
//   return <input /> ; // = React.createElement (vanilla JS)
// };

class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {term: ''}; // term = search term つまり value of input. constructor = sets default state
  }

  render () {
    // this.state.term = e.target.value // BAD!
    return (
      <div className= "search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputchange(event.target.value)}
        />
      </div>
    );
  }
  // この term はどこからきてるのか？

  onInputchange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
    }
}


export default SearchBar;

// React, {Component} Component =
// const Component = React.Component
