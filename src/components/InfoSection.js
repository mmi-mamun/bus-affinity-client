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
            description: "Always opened",
            icon: clock,
            bgClass: "bg-accent"
        },
        {
            id: 2,
            title: "Our locations",
            description: "Dhaka, Bangladesh",
            icon: marker,
            bgClass: "bg-secondary"
        },
        {
            id: 1,
            title: "Contact Us",
            description: "+88 01 567 806 806",
            icon: phone,
            bgClass: "bg-accent"
        }
    ]
    return (
        <div className='grid grid-cols-3 gap-6 py-24 px-6'>
            {
                cardData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default InfoSection;