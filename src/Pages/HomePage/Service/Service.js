import React from "react";
import { Card, Col, } from "react-bootstrap";
import './Service.css';

const Service = ({ service }) => {
  const { name, img, description, price} = service;
  return (
    <div>
      <Col className="h-100">
            <Card id="cardBody" className="h-100 ">
              <Card.Img variant="top" src={img} />
              <Card.Body className="p-3">
                <h2 className="service-title"> {name} </h2>
                <Card.Text>
                 {description}
                 <br />
                 <h2 className="mt-3">Price: <span className="text-danger">${price} </span> </h2>
                </Card.Text>
              </Card.Body>
              <button className="myButton">Get In Touch</button>
            </Card>
          </Col>
    </div>
  );
};

export default Service;
