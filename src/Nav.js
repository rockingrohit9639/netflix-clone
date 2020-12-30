import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav()
{
    
    const [show, handleShow] = useState(false);

    useEffect(() =>
    {
        window.addEventListener('scroll', () =>
        {
            if (window.scrollY > 100)
            {
                handleShow(true);
            }
            else
            {
                handleShow(false);
            }
        });

        return () =>
        {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="netflix-logo"
            />
            <img
                className="nav__avatar"    
                src="https://www.w3schools.com/w3images/avatar2.png"
                alt="avatar icon"
            />
            
        </div>
    )
}

export default Nav;
