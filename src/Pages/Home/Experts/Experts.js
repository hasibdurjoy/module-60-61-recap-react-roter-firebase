import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Expert from '../Expert/Expert';


const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className="container text-center">
            <h3>Our Experts</h3>
            <div className="row border shadow">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;