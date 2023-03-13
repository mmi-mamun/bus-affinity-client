import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/Banner/banner_image.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="w-1/2 rounded-lg shadow-2xl" alt='Banner' />
                <div className='px-6'>
                    <h1 className="text-5xl font-bold">The inside of a bus is a different dimension.!</h1>
                    <p className="py-6">A bus ride is like being in another world. Finding a good bus driver can be as important as finding a good musician.</p>

                    <Link to='/safe-login'><button className="btn btn-primary bg-gradient-to-r from-amber-800 to-rose-600 text-white">See full project with safety</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;