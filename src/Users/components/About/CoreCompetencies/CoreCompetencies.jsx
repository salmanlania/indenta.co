import React, { useEffect, useRef } from 'react'
import './CoreCompetencies.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import firstImage from './images/firstImage.jpg'
import secondImage from './images/secondImage.jpg'
import thirdImage from './images/thirdImage.jpg'
import fourthImage from './images/fourthImage.jpg'

export const CoreCompetencies = () => {

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
    <div data-aos="zoom-in-up" data-aos-duration="1200">
      <hr />
      <div className="CoreCompetencies">
        <section className="CoreCompetenciesHeading">
          <h1 className='text-3xl'>Core Competencies</h1>
          <p>We have a set of diverse knowledge and technical capacities that empower businesses to adeptly navigate the intricate needs of our clients. Through these competencies, we not only establish a lasting footprint but also cultivate a robust reputation and brand image, solidifying our position in the market.</p>
        </section>
        <section className="CoreCompetenciesHeadingTiles">
          <div class="max-w-xs rounded overflow-hidden shadow-lg" style={{ width: '15rem', height: '23.4rem' }}>
            <img class="w-full" src={firstImage} alt="Sunset in the mountains" />
            <div class="px-4 py-2">
              <div class="font-bold text-lg mb-1">Leadership</div>
              <p class="text-gray-600 text-sm">
                Leading by example, fostering relationships, and motivating teams to excel while being accountable for staff development and knowledge sharing.
              </p>
            </div>
          </div>
          <div class="max-w-xs rounded overflow-hidden shadow-lg" style={{ width: '15rem', height: '23.4rem' }}>
            <img class="w-full" src={secondImage} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Client Focus</div>
              <p class="text-gray-700 text-base">
                Placing customers first, ensuring positive experiences by understanding their needs and fortifying relationships.
              </p>
            </div>
          </div>
          <div class="max-w-xs rounded overflow-hidden shadow-lg" style={{ width: '15rem', height: '23.4rem' }}>
            <img class="w-full" src={thirdImage} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Technology</div>
              <p class="text-gray-700 text-base">
                Crafting robust technology infrastructure and staying updated with advancements.
              </p>
            </div>
          </div>
          <div class="max-w-xs rounded overflow-hidden shadow-lg" style={{ width: '15rem', height: '23.4rem' }}>
            <img class="w-full" src={fourthImage} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Result Orientation</div>
              <p class="text-gray-700 text-base">
                Achieving company goals by setting challenging targets, directing efforts accordingly, and surpassing expectations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}
