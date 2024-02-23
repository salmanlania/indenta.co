import React , {useEffect} from 'react'
import './MarketingServices.css'

// images
import firsticon from './Images/firsticon.png'
import secondicon from './Images/secondicon.png'
import thirdicon from './Images/thirdicon.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const MarketingServices = () => {
    useEffect(() => {
        document.title = 'Marketing Services | Indenta';
        AOS.init({
            duration: 1000,
            once: false,
        });
        window.addEventListener('scroll', AOS.refresh);
        return ()=>{
          window.removeEventListener('scroll', AOS.refresh);
        }
    }, []);
    return (
        <div className='MarketingServices'>
            
            <section className="MarketingServicesHeader">
                <div className="MarketingServicesHeading" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className='text-5xl text-white font-bold'>Marketing Services</h1>
                </div>
            </section>
            <section className="MarketingServicesSecond" data-aos="fade-up" data-aos-duration="500">
                <p>Indenta DSA stands as a leading financial and marketing consultancy, committed to delivering customer services across diverse channels within the financial industry.</p>
            </section>
            <section className='MarketingServicesThird' data-aos="fade-right" data-aos-duration="400">
                <h1 className='text-4xl'>Consult our Expert</h1>
                <button><a>Book an Appointment</a></button>
            </section>
            <section className='MarketingServicesFourth' data-aos="fade-up-right" data-aos-duration="500">
                <h1 className='text-3xl'>Our Offered Services</h1>
                <p>Indenta DSA revolves around devising and executing marketing strategies centered on the core of your business. Our commitment extends beyond strategy implementation – we provide steadfast support to help you achieve your business goals and objectives.
                </p>
            </section>
            <section className="MarketingServicesFifth">
                <div className="MarketingServicesFourthCard" data-aos="flip-left" data-aos-duration="500">
                    <img src={firsticon} alt="" />
                    <h1>Online Marketing</h1>
                    <p>Swiftly reach your target customers and achieve results with our expertise.</p>
                </div>
                <div className="MarketingServicesFourthCard" data-aos="flip-left" data-aos-duration="500">
                    <img src={secondicon} alt="" />
                    <h1>Direct Sales</h1>
                    <p>Embark on business development and sales activities with our proactive team.</p>
                </div>
                <div className="MarketingServicesFourthCard" data-aos="flip-left" data-aos-duration="500">
                    <img src={thirdicon} alt="" />
                    <h1>Telesales</h1>
                    <p>Via a contact center designed to align with your business goals.</p>
                </div>
            </section>
        </div>
    )
}
