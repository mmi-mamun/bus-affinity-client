import React from 'react';
import Banner from '../components/Banner';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Terms from '../components/Terms';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <Services></Services>
            <Terms></Terms>
        </div>
    );
};

export default Home;