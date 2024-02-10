import React , {useEffect} from 'react'
import './OurServices.css'
import MarketingServices from './images/MarketingServices.jpg'
import consumerServices from './images/consumerServices.png'
import CorporateServices from './images/CorporateServices.jpg'
import { useNavigate, Outlet } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';


export const OurServices = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
    });
    window.addEventListener('scroll', AOS.refresh);
    return ()=>{
      window.removeEventListener('scroll', AOS.refresh);
    }
}, []);
  const navigate = useNavigate()
  return (
    <div className='OurServices'>
      <section className="OurServicesHeader">
        <div className="OurServicesHeading" data-aos="fade-up" data-aos-duration="2000">
          <h1 className='text-7xl text-white font-bold'>Our Services</h1>
        </div>
      </section>
      <section className="OurServicesSecond" data-aos="fade-up" data-aos-duration="300">
        <p>Indenta DSA stands as a leading financial and marketing consultancy, committed to delivering customer services across diverse channels within the financial industry.</p>
      </section>

      {/* MARKETING */}
      
      <div className="flex flex-wrap w-full bg-white shadow-lg">
        <div data-aos="fade-right" data-aos-duration="500" className="w-full md:w-1/2 mb-20">
          <img src={MarketingServices} alt="Marketing Services" className="w-full h-full object-cover" />
        </div>
        <div data-aos="fade-left" data-aos-duration="500" className="w-full md:w-1/2 p-4" style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
          <h1 className="text-4xl font-bold mb-2">
            Marketing Services
          </h1>
          <p className='text-xl font-medium'>
            Indenta DSA Marketing Services offers a holistic support in financial marketing, leveraging a team of skilled marketers dedicated to apply the most effective strategies.
          </p>
          <button
            className="OurServicesBtn mt-2 text-xl py-2 px-6 rounded"
            style={{
              width: '200px',
              height: '50px',
            }}
            onClick={() => navigate('/marketing-services')}
          >
            <a>Learn More</a>
          </button>
        </div>
      </div>

      {/* CONSUMER  */}

      <div className="flex flex-wrap w-full bg-white shadow-lg">
        <div data-aos="fade-right" data-aos-duration="500" className="w-full md:w-1/2 p-4" style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
          <h1 className="text-4xl font-bold mb-2">
            Consumer Services
          </h1>
          <p className='text-xl font-medium'>
            Indenta DSA Consumer Services have extensive experience in the industry, making us well-acquainted with your needs. We specialize in offering a range of services, including auto loans, mortgage loans, credit cards, and insurance, tailored to meet your requirements.
          </p>
          <button
            className="OurServicesBtn mt-2 text-xl py-2 px-6 rounded"
            style={{
              width: '200px',
              height: '50px',
            }}
            onClick={() => navigate('/consumer-services')}
          >
            <a>Learn More</a>
          </button>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" className="w-full md:w-1/2 mb-20">
          <img src={consumerServices} alt="Marketing Services" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Corporate */}

      <div className="flex flex-wrap w-full bg-white shadow-lg">
        <div data-aos="fade-right" data-aos-duration="500" className="w-full md:w-1/2 mb-20">
          <img src={CorporateServices} alt="Marketing Services" className="w-full h-full object-cover" />
        </div>
        <div data-aos="fade-left" data-aos-duration="500" className="w-full md:w-1/2 p-4" style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
          <h1 className="text-4xl font-bold mb-2">
            Corporate Services
          </h1>
          <p className='text-xl font-medium'>
            Indenta DSA streamlines financial products to foster the expansion of businesses. Our firm provides an array of solutions designed for small and medium enterprises aiming to enhance their financial prowess.
          </p>
          <button
            className="OurServicesBtn mt-2 text-xl py-2 px-6 rounded"
            style={{
              width: '200px',
              height: '50px',
            }}
            onClick={() => navigate('/corporate-services')}
          >
            <a>Learn More</a>
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  )
}
