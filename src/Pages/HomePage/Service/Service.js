import React from "react";
import { Button, Card, Col, } from "react-bootstrap";
import './Service.css';

const Service = ({ service }) => {
  const { name, img, description, price} = service;
  return (
    <div>
      <Col className="h-100 ">
            <Card id="cardBody" className="h-100 ">
              <Card.Img variant="top" src={img} />
              <Card.Body className="p-3">
                <Card.Title className="title">{name} </Card.Title>
                <Card.Text>
                 {description}
                 <h2>{price} </h2>
                </Card.Text>
              </Card.Body>
              <button className="myButton">Get In Touch</button>
            </Card>
          </Col>
    </div>
  );
};

export default Service;
