import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://fierce-thicket-85058.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="container text-center" id="services">
            <h3>Our Services</h3>
            <div className="services-container container text-center">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;