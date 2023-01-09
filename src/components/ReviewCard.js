import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, review: opinion, location, img } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-justify">{opinion}</h2>

                <div className="flex items-center gap-5 my-3">
                    <div className="avatar">
                        <div className="w-16 mask mask-hexagon">
                            <img src={img} alt='Reviewer' />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg">{name}</h1>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;