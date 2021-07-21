import React from 'react';

const Footer = () => {
    return ( 
        <footer className="container-footer">
            <p className="title-footer">ÚNETE A LA COMUNIDAD DEAD BY DAYLIGHT</p>
            <div className="container-ul">
                <a href="https://twitter.com/deadByBHVR" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UCaSgsFdGbwjfdawl3rOXiwQ" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/deadbydaylight/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i></a>
                <a href="https://www.twitch.tv/deadbydaylight" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitch"></i></a>
                <a href="https://discord.com/invite/deadbydaylight" target="_blank" rel="noreferrer">
                    <i className="fab fa-discord"></i></a>
            </div>
            <div className="p-footer">
                <p>EULA</p>
                <p>PRIVACY POLICY</p>
                <p>TERMS OF USE</p>
                <p>PRESS</p>
                <p>CONTEST RULES</p>
            </div>
            <h6>© 2015-2021 and BEHAVIOUR, DEAD BY DAYLIGHT 
            and other related trademarks and logos belong to Behaviour 
            Interactive Inc. All rights reserved.</h6>
        </footer>
     );
}
 
export default Footer;