import React from 'react';

const Expert = ({ expert }) => {
    const { name, job, img, age } = expert;
    return (
        <div className="col-lg-4 col-md-6 col-xs-12">
            <img src={img} alt="" className="img-fluid" height="300px" />
            <h2>{name}</h2>
            <h4>Expert in : {job}</h4>
            <h5>Age : {age}</h5>
        </div>
    );
};

export default Expert;