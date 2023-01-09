import React from 'react';
import booking from '../assets/icons/booking-white.png'
import snacks from '../assets/icons/snacks-white.png'
import wifi from '../assets/icons/wifi-white.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = [
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
        <div className=' bg-base-200 py-16 px-12'>
            <div className='text-center'>
                <h3 className="text-md uppercase font-semibold">Our Services</h3>
                <h2 className="text-3xl">Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-6'>
                {
                    servicesData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;