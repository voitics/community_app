import React from "react";
import Form from 'react-bootstrap/Form';

const SelectField = ({ id, value, label, name, options, type, onChange }) => (
  <Form.Group controlId={id}>
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control
      as={type}
      value={value}
      name={name}
      onChange={onChange} >
      {options.map(option => {
        return <option value={option.value}>{option.label}</option>
      })}
    </Form.Control>
  </Form.Group>
);

export default SelectField;
