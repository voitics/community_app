
import React from "react";
import Form from 'react-bootstrap/Form';

const CheckField = ({ id, value, label, name, type, onChange, checked }) => (
  <Form.Group controlId={id}>
    <Form.Check
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      label={label}
      checked={checked} />
  </Form.Group>
);

export default CheckField;