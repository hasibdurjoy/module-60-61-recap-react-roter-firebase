import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceID } = useParams();

    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://fierce-thicket-85058.herokuapp.com/services/${serviceID}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h3>This is booking {serviceID}</h3>
            <h4>Details of {service.name}</h4>
        </div>
    );
};

export default Booking;