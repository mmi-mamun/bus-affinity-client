import React from 'react';
import Banner from '../components/Banner';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <Services></Services>
        </div>
    );
};

export default Home;