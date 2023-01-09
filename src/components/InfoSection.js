import React from 'react';
import booking from '../assets/icons/booking-white.png'
import snacks from '../assets/icons/snacks-white.png'
import wifi from '../assets/icons/wifi-white.png'
import Card from './Card';

const InfoSection = () => {
    const cardData = [
        {
            id: 1,
            title: "Fast Booking",
            description: "We provide fast booking system for you great trip.",
            icon: booking,
            bgClass: "bg-accent"
        },
        {
            id: 2,
            title: "Provide Snacks",
            description: "We provide Hygienic snacks & Beverage during your journey.",
            icon: snacks,
            bgClass: "bg-gradient-to-r from-secondary to-accent"
        },
        {
            id: 3,
            title: "WiFi Facilities",
            description: "For making your journey be great we provide fast internet facilities.",
            icon: wifi,
            bgClass: "bg-secondary"
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 py-24 lg:px-12 px-6'>
            {
                cardData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default InfoSection;