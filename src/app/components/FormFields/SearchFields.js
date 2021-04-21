import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";

const SearchField = ({ id, value, name, placeholder, type, onChange, handleSearch }) => (
  <Form.Group controlId={id} className="custom_search_form">
    <Form.Control
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange} />
    <Button variant="secondary" onClick={handleSearch}><FaSearch /></Button>
  </Form.Group>
);

export default SearchField;