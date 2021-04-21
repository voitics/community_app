import React from "react";
import Form from 'react-bootstrap/Form';

const InputField = ({ id, value, label, name, placeholder, type, onChange }) => (
  <Form.Group controlId={id}>
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange} />
  </Form.Group>
);

export default InputField;