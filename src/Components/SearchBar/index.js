import React, { Component } from 'react';
import "./index.css";

class SearchBar extends Component {

    state = {
        searchTerm: ""
    }
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchTermtoApi(this.state.searchTerm);
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" className="search" placeholder="Search movie title..." onChange={this.handleChange}/>
            <input type="submit" />
        </form>
      );
    }
  }

  export default SearchBar;