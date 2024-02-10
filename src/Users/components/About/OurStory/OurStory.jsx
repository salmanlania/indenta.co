import React, { useEffect } from 'react'
import './OurStory.css'
import image from './images/download.jfif'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const OurStory = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
        window.addEventListener('scroll', AOS.refresh);
        return () => {
            window.removeEventListener('scroll', AOS.refresh);
        }
    }, []);
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='OurStory'>
            <section className="OurStoryPartOne">
                <section className="OutStoryHeading">
                    <h1>Our Story</h1>
                    <p>Indenta DSA stands as a dynamic force in the UAE’s direct sales landscape,
                        experiencing rapid growth under the strategic vision of Baber Saleem. Founded on
                        the principles of customer satisfaction, teamwork, and exemplary service, Indenta
                        DSA has emerged as a prominent player, offering an extensive array of services to
                        banks and financial institutions in the UAE. Specializing in personal loans,
                        financing, and credit card sales, Indenta DSA is dedicated to facilitating the
                        financial aspirations of individuals and businesses alike.</p>
                </section>
                <section className='OutStoryImage'>
                    <img src={image} alt="" />
                </section>
            </section>
            <hr />
            <hr />
            <section className="OurStoryPartTwo">
                <section className="OutStoryHeadings">
                    <p>Indenta DSA stands out as one of the fastest-growing direct sales agencies in the UAE. Rooted in the principles of customer satisfaction, teamwork, and superior service, Indenta DSA offers an extensive suite of services to banks and financial institutions across the UAE. Specializing in personal loans, financing, and credit card sales, we take pride in being your all-encompassing financial solution. Acting as a strong bridge between banks and customers, our mission is to secure the best finance options for you. If you’re in search of a personal loan, rest assured that Indenta DSA can facilitate loans through leading banks with nominal interest rates, eliminating the need for you to leave your comfort zone. Our dedicated team ensures a hassle-free application process, with the convenience of visits to your location for streamlined processing. Our expertise spans from direct sales to marketing, reflecting our deep industry knowledge and commitment to providing exceptional value. Indenta DSA comprises a team of professional bankers committed to legitimacy and accountability in every endeavor.</p>
                </section>
                <section className='OutStoryImages'>
                    <img src={image} alt="" />
                </section>
            </section>
        </div>
    )
}
