import React from 'react';
import terms from '../assets/icons/terms.jpg'

const Terms = () => {
    return (
        <div className="hero py-16">
            <div className="hero-content flex-col lg:flex-row">
                <img src={terms} className="lg:w-1/3 rounded-lg shadow-2xl mx-6" alt='terms and condition' />
                <div className='px-6'>
                    <h1 className="text-5xl font-bold mb-8">TERMS AND CONDITION</h1>
                    <p className="py-6 text-2xl">We are committed to maintaining the trust and confidence of our visitors to our website.</p>
                    <ul className='pl-6 mb-6 text-xl text-justify'>
                        <li className='my-2'>✨ It is the driver's responsibility for the safety of the vehicle at all times, and as such, the driver may remove any passenger whose conduct compromises safety or is in breach of the Public Service Vehicle.</li>
                        <li className='my-2'>✨ Other than confectionery, no food or drink (including alcoholic beverages) may be consumed on the vehicle without prior consent from Commbus.</li>
                        <li className='my-2'>✨ Chewing gum is banned from all vehicles. </li>
                        <li className='my-2'>✨ No smoking will be permitted on the vehicle at any time</li>
                        <li className='my-2'>✨ The Hirer must advise at the time of booking if the party is made up of children. In such cases, The Hirer must ensure that there is sufficient adult supervision during the hire.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Terms;