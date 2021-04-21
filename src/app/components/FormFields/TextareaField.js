import React from "react";
import Form from 'react-bootstrap/Form';

const TextareaField = ({ id, value, label, name, rows, type, onChange }) => (
  <Form.Group controlId={id}>
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control
      as={type}
      value={value}
      name={name}
      onChange={onChange}
      rows={rows} />
  </Form.Group>
);

export default TextareaField;