import React ,{useEffect} from 'react'
import './CorporateServices.css'

// images
import firsticon from './Images/firsticon.png'
import secondicon from './Images/secondicon.png'
import thirdicon from './Images/thirdicon.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const CorporateServices = () => {
    useEffect(() => {
        document.title = 'Corporate Services | Indenta';
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
        <div className='CorporateServices'>
            <section className="CorporateServicesHeader">
                <div className="CorporateServicesHeading" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className='text-5xl text-white font-bold'>Corporate Services</h1>
                </div>
            </section>
            <section className="CorporateServicesSecond" data-aos="fade-up" data-aos-duration="500">
                <p>Indenta DSA streamlines financial products to foster the expansion of businesses. Our firm provides an array of solutions designed for small and medium enterprises aiming to enhance their financial prowess.</p>
            </section>
            <section className='CorporateServicesThird' data-aos="fade-right" data-aos-duration="400">
                <h1 className='text-4xl'>Consult our Expert</h1>
                <button><a>Book an Appointment</a></button>
            </section>
            <section className='CorporateServicesFourth' data-aos="fade-up-right" data-aos-duration="500">
                <h1 className='text-3xl'>Our Offered Services</h1>
                <p>Indenta DSA is consistently aligned with the nature of financial needs, and therefore, we deliver an extensive range of services with continually adaptive management. We precisely assess our customers’ financial situations, guiding them towards the realization of their financial objectives.
                </p>
            </section>
            <section className="CorporateServicesFifth">
                <div className="CorporateServicesFourthCard" data-aos="flip-left" data-aos-duration="500">
                    <img src={firsticon} alt="" />
                    <h1>Fleet Financing</h1>
                    <p>Indenta DSA provides economical solutions for every facet of your fleet management.</p>
                </div>
                <div className="CorporateServicesFourthCard" data-aos="flip-left" data-aos-duration="500">
                    <img src={secondicon} alt="" />
                    <h1>SME Loans</h1>
                    <p>We extend SME consultation and support throughout the process of establishing your business.</p>
                </div>
                <div className="CorporateServicesFourthCard" data-aos="flip-left" data-aos-duration="500">
                    <img src={thirdicon} alt="" />
                    <h1>Trade Financing</h1>
                    <p>Indenta DSA arranges inventive trade and export finance solutions tailored to meet your requirements.</p>
                </div>
            </section>
        </div>
    )
}
