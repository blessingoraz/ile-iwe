import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const FormBook = (props) => {
  return (
    <Form inline onSubmit={props.onSubmit}>
      <FormGroup bsSize="small">
        <FormControl id="searchForm" type="text" placeholder="Search for books" onChange={props.onChange} style={{"width": "40em", "marginLeft": "100px"}}></FormControl>
      </FormGroup>
      {' '}
      <Button type="submit">Search </Button>
    </Form>
  )
}

// FormBook.propTypes = {
//   onSubmit: React.PropTypes.func,
//   onChange: React.PropTypes.func
// }

export default FormBook;