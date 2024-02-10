import React, { useEffect } from 'react'
import './Contact.css'
import { GetInTouch } from '../../components/Contact/GetInTouch'

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us | Indenta';
    }, []);
    return (
        <div className="ContactGet">
            <GetInTouch />
        </div>
    )
}
