import React, { useEffect } from 'react'
import './ConsumerServices.css'

// images
import firsticon from './Images/firsticon.png'
import secondicon from './Images/secondicon.png'
import thirdicon from './Images/thirdicon.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const ConsumerServices = () => {
    useEffect(() => {
        document.title = 'Consumer Services | Indenta';
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
        <div className='ConsumerServices'>
            <section className="ConsumerServicesHeader">
                <div className="ConsumerServicesHeading" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className='text-5xl text-white font-bold'>Consumer Services</h1>
                </div>
            </section>
            <section className="ConsumerServicesSecond" data-aos="fade-up" data-aos-duration="500">
                <p>Indenta DSA Consumer Services have extensive experience in the industry, making us well-acquainted with your needs. We specialize in offering a range of services, including auto loans, mortgage loans, credit cards, and insurance, tailored to meet your requirements.</p>
            </section>
            <section className='ConsumerServicesThird' data-aos="fade-right" data-aos-duration="400">
                <h1 className='text-4xl'>Consult our Expert</h1>
                <button><a>Book an Appointment</a></button>
            </section>
            <section className='ConsumerServicesFourth' data-aos="fade-up-right" data-aos-duration="500">
                <h1 className='text-3xl'>Our Offered Services</h1>
                <p>We stand out as the foremost choice for financial guidance, consistently delivering impeccable service to wow the customers. Committed to our clients’ satisfaction, we make the experience hassle-free. We stand for our customers at every step, guiding their journey, alerting them of potential risks, and providing them with peace of mind.
                </p>
            </section>
            <section className="ConsumerServicesFifth">
                <div className="ConsumerServicesFourthCard" data-aos="flip-left" data-aos-duration="500">
                    <img src={firsticon} alt="" />
                    <h1>Loan Assistance</h1>
                    <p>Whether for mortgage loans, auto loans, or other related loans, we assist you in securing the financing you need.</p>
                </div>
                <div className="ConsumerServicesFourthCard" data-aos="flip-left" data-aos-duration="500">
                    <img src={secondicon} alt="" />
                    <h1>Credit Cards</h1>
                    <p>You get the best suited credit card when you choose us.</p>
                </div>
                <div className="ConsumerServicesFourthCard" data-aos="flip-left" data-aos-duration="500">
                    <img src={thirdicon} alt="" />
                    <h1>Insurance Solutions</h1>
                    <p>We assist in finding affordable insurance plans which cater to your specific needs.</p>
                </div>
            </section>
        </div>
    )
}
