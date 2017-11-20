import React, { Component } from 'react';
import searchMovie from "../TMDB"
import "./index.css";

class MainContainer extends Component {

  componentWillReceiveProps(nextProps) {
    document.body.style.backgroundImage = "url(" + "https://image.tmdb.org/t/p/w1280/" + nextProps.movieData.backdropPath + ")"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "no-repeat";
  }

  componentWillMount() {
    document.body.style.backgroundImage = "url(" + "https://image.tmdb.org/t/p/w1280/" + this.props.movieData.backdropPath + ")"    
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "no-repeat";
  }

  render() {
    return (
      <div className="mainContainer">
        <img className="poster" src={"https://image.tmdb.org/t/p/w500/" + this.props.movieData.posterPath} />
        <div className="details">
          <span className="title">{this.props.movieData.title}</span>
          <span className="tagline">{this.props.movieData.tagline} </span>
          <span className="overview">{this.props.movieData.overview} </span>
          <div className="facts">
            <div>
              <p>Original Release:</p>
              <span className="factsValue">{this.props.movieData.releaseDate} </span>
            </div>
            <div>
              <p>Running Time:</p>
              <span className="factsValue">{this.props.movieData.runtime} Minutes</span>
            </div>
            <div>
              <p>Box Office:</p>
              <span className="factsValue">${this.props.movieData.revenue} </span>
            </div>
            <div>
              <p>Vote Average:</p>
              <span className="factsValue">{this.props.movieData.voteAverage} / 10 </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;