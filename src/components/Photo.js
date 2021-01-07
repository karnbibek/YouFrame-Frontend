import React from 'react';
import { Card } from 'react-bootstrap';
import { BASE_API_URL } from '../utils/constants'

const Photo = ({ id, name }) => {
  return (
    <Card className="photo text-center">
      <Card.Img
        className="preview-image"
        id={name}
        variant="top"
        src={`${BASE_API_URL}/photos/${id}`}
        alt="Photo"
      />
      <Card.Footer style={{padding: "12px 0px 0px 0px", color: "#3182ce"}}>{name}</Card.Footer>
    </Card>
  );
  // }
};

export default Photo;
