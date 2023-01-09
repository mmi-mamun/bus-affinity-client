import React from 'react';

const Card = ({ card }) => {
    const { title, description, icon, bgClass } = card;
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass} pl-3 lg:pl-6 py-6 text-white`}>
            <figure><img src={icon} alt="Album" /></figure>
            <div className="card-body mx-auto">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;