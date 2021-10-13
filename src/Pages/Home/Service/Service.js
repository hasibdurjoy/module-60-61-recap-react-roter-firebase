import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    const { id, name, price, time, img, description } = props.service;
    return (
        <div className="service pb-3 rounded" >
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <p>{time}</p>
            <p>{description}</p>
            <Link to={`/booking/:${id}`}><button className="btn btn-warning">book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;