import React from 'react';
import Banner from '../components/Banner';
import ConductorSection from '../components/ConductorSection';
import InfoSection from '../components/InfoSection';
import ReviewSection from '../components/ReviewSection';
import Services from '../components/Services';
import Terms from '../components/Terms';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <Services></Services>
            <Terms></Terms>
            <ConductorSection></ConductorSection>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;