import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <div className="left-side">
                <p><small>Copyright @ {year} </small>
                    <i className='d-block'>Zohirul Islam</i>
                </p>
            </div>
            <div className="right-side">
                <h1>Contract Us</h1>
                <span className='me-2'><img src="https://i.ibb.co/dDYWy98/facebook.png" alt="" /></span>
                <span className='me-2'><img src="https://i.ibb.co/q5Wk3yZ/youtube.png" alt="" /></span>
                <span className='me-2'><img src="https://i.ibb.co/V9m47cv/twiter.png" alt="" /></span>
                <span className='me-2'><img src="https://i.ibb.co/mvC63Xh/imo.jpg" alt="" /></span>

            </div>
        </footer>
    );
};

export default Footer;