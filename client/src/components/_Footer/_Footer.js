import React, { Component } from 'react';//react
import styles from './Footer.css';

const Tools = (props) => { //Footer for when you're logged in or in duel and need
                           //quick access to features / game controls
    return (
        <div>
            <nav>
                <button>
                    Bah
                </button>
            </nav>
            <FooterMenu/>
        </div>
    );
};


const FooterMenu = (props) => { //Standard Footer with About, Contact, etc.
    return (
        <div>
            Standard Stuff
        </div>
    );
};

const Footer = (props) => {

    return (
        <div tabIndex="0" id="footer">
            <span className="sr-only">
                If you cannot see the footer, please click on it.
            </span>
            {props.loggedIn? <Tools/> : <FooterMenu/>}
        </div>
    );
};

export default Footer;