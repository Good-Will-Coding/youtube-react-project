import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAMvqbRqkXA_fBIDOCtV-ng99siZXfkRzs";

// Create a new component Should produce HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" },
    videos => this.setState({ videos }));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} /> 
      </div>
    );
  }
}

// Take this component generated HTML and put it on
// page

ReactDOM.render(<App />, document.querySelector(".container"));
