import React from "react";
import Button from 'react-bootstrap/Button';

const ButtonField = ({ id, text, type, onClick, variant, className }) => (
  <Button variant={variant} type={type} id={id} onClick={onClick} className={className}>
    {text}
  </Button>
);

export default ButtonField;

