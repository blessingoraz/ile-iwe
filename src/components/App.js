import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css//App.css';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      console.log(data, "is data here")
      this.setState({ bookList: data.items });

    })
  }

  showBooks() {
    const books = this.state.bookList;
    if (books.length > 0) {
      <div className="card">
        {books.map((book) => {
          console.log(book, "each book is returned")
        })}
      </div>

    } else {
      <div>
        We might return default
        </div>
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Search for books</h2>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup bsSize="large">
              <FormControl type="text" placeholder="Search for books" onChange={this.handleChange}></FormControl>
            </FormGroup>
            <Button bsStyle="primary" type="submit">Search</Button>
          </Form>
          {this.showBooks()}
        </div>
      </div>
    );
  }
}

export default App;
