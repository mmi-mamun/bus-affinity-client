import React from 'react';
import quote from '../assets/icons/quote.svg'
import people1 from '../assets/images/people1.png'
import people2 from '../assets/images/people2.png'
import people3 from '../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const ReviewSection = () => {
    const reviews = [
        {
            id: 1,
            name: 'GM Tasrif',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Dhaka',
            img: people1
        },
        {
            id: 2,
            name: 'MI Mamun',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Dhaka',
            img: people2
        },
        {
            id: 3,
            name: 'MMI Humayra',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Dhaka',
            img: people3
        },
    ]
    return (
        <section className='my-16 mx-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl font-bold">Review section</h4>
                    <h2 className="text-4xl font-semibold">What Our Passengers Says</h2>
                </div>
                <figure>
                    <img className='w-24 md:w-32 lg:w-40' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }

            </div>
        </section>
    );
};

export default ReviewSection;