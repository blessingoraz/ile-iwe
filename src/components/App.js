import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import FormBook from "./FormBook";

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showBooks = this.showBooks.bind(this);
    this.bookCards = this.bookCards.bind(this);
    this.state = {
      bookName: "",
      bookList: []
    }
  }

  handleChange(event) {
    this.setState({ bookName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = "https://www.googleapis.com/books/v1/volumes?q="
    return fetch(url + this.state.bookName).then(response => {
      return response.json()
    }).then(data => {
      this.setState({ bookList: data.items });

    })
  }

  bookCards(item) {
    return (
      <div className="col-md-3 .offset-md-1" key={item.id}>
        <div className="card">
          <img className="card-img-top" src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />
          <div className="card-block">
            <h4 className="card-title">{item.volumeInfo.title}</h4>
            <p className="card-text">{item.volumeInfo.description}</p>
            <a href={item.accessInfo.pdf.acsTokenLink} className="btn btn-primary">Download book</a>
          </div>
        </div>
      </div>
    )
  }

  showBooks() {
    if (this.state.bookList.length > 0) {
      return (
        <div className="container">
          <div className="row">
              {this.state.bookList.map((book) => {
                return this.bookCards(book);
              })})
          </div>
      </div>)

    } else {
      return (<div>
        We might return default
      </div>)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Search for books</h2>
          <FormBook onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        </div>
        {this.showBooks()}
      </div>
    );
  }
}

export default App;
