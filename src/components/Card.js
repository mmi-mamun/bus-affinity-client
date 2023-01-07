import React from 'react';

const Card = ({ card }) => {
    const { title, description, icon, bgClass } = card;
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass} p-6`}>
            <figure><img src={icon} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;