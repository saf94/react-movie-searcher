import React, { Component } from 'react';
import './App.css';
import MainContainer from "./Components/MainContainer"
import SearchBar from "./Components/SearchBar"
import searchMovie from "./Components/TMDB"

class App extends Component {

  state = {
    movieData: {
      title: "Inception",
      tagline: "Your mind is the scene of the crime.",
      overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      releaseDate: "2010-07-14",
      backdropPath: "/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
      posterPath: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      runtime: 148,
      revenue: 825532764,
      voteAverage: 8.1
    }
  }

  constructor(props) {
    super(props)
    this.searchTermtoApi = this.searchTermtoApi.bind(this);
  }

  async searchTermtoApi(searchTerm) {
    let searchResults = await searchMovie(searchTerm)
    console.log(searchResults)
    this.setState({
      movieData: searchResults
    })
  }

  render() {
    return (
      <div className="background">
        <div className="navigation">
        <img class="logo" src={require("./Assets/powered-by-tmdb.png")} />
        <SearchBar searchTermtoApi={this.searchTermtoApi} />
        </div>
        <MainContainer movieData={this.state.movieData} />
      </div>
    );
  }
}

export default App;
