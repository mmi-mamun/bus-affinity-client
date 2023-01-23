import React from 'react';
import conductor from '../assets/images/conductor.png'
import background from '../assets/images/Background.jpg'
import PrimaryButton from './PrimaryButton';

const ConductorSection = () => {
    return (
        <section className='mt-32 bg-no-repeat' style={{ background: `url(${background})` }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={conductor} className="shadow-2xl -mt-40 lg:ml-6 hidden md:block lg:block" alt='conductor' />
                    <div className='lg:pr-12 md:mx-12'>
                        <h1 className="text-3xl font-bold mt-8 mb-2">Contact with conductor</h1>
                        <h1 className="text-5xl font-bold mb-6 text-white">Make a call for emergency contact</h1>
                        <p className="py-6 text-xl text-justify text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Make a call</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConductorSection;