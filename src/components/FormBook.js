import React, { PropTypes } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const FormBook = ({onSubmit, onChange}) => {
  return (
    <Form inline onSubmit={onSubmit}>
      <FormGroup bsSize="small">
        <FormControl type="text" placeholder="Search for books" onChange={onChange}></FormControl>
      </FormGroup>
      {' '}
      <Button type="submit">Search </Button>
    </Form>
  )
}

FormBook.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default FormBook;