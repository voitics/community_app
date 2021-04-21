import React from "react";
import Button from 'react-bootstrap/Button';

const OutlineButtonField = ({ id, text, onClick, className }) => (
  <Button variant="outline-primary" id={id} onClick={onClick} className={className}>
    {text}
  </Button>
);

export default OutlineButtonField;

