import React from 'react';
import './Service.css';

const Service = (props) => {

    const { name, price, time, img, description } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <p>{time}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;