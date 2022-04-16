import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch("data.json")
        .then((res) => res.json())
        .then((data) => setServices(data))
    } , []);

    console.log(services);
    return (
        <div className='bg-dark'>
            <h2 className='text-center title mt-5 mb-4'>My Services</h2>
            <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
      </Row>
        </div>
    );
};

export default Services;