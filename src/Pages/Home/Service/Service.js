import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    const { _id, name, price, time, img, description } = props.service;
    return (
        <div className="service pb-3 rounded" >
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <p>{time}</p>
            <p className="text-start ps-3">{description.slice(20)}</p>
            <Link to={`/booking/:${_id}`}><button className="btn btn-warning">book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;