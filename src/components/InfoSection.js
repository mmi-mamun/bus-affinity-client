import React from 'react';
import clock from '../assets/icons/clock.svg'
import marker from '../assets/icons/marker.svg'
import phone from '../assets/icons/phone.svg'
import Card from './Card';

const InfoSection = () => {
    const cardData = [
        {
            id: 1,
            title: "Opening Hours",
            description: "Always open for all",
            icon: clock,
            bgClass: "bg-accent"
        },
        {
            id: 2,
            title: "Visit our location",
            description: "Dhaka, Bangladesh",
            icon: marker,
            bgClass: "bg-gradient-to-r from-secondary to-accent"
        },
        {
            id: 3,
            title: "Contact us now",
            description: "+88 01 567 806 806",
            icon: phone,
            bgClass: "bg-secondary"
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-8 lg:gap-12 py-24 lg:px-12 px-6'>
            {
                cardData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default InfoSection;