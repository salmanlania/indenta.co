import React, {useEffect} from 'react'
import { OurServices } from '../../components/OurServices/OurServices'
import './Services.css'

export const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | Indenta';
}, []);
  return (
    <div>
        <OurServices />
    </div>
  )
}
