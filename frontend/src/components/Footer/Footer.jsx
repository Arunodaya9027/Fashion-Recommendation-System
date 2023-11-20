
// Importações
import './Footer.css';
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="footer-content-left-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="footer-content-left-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates
                            voluptatibus. Quisquam, voluptates voluptatibus.
                        </p>
                    </div>
                    <div className="footer-content-left-social">
                        <div className="footer-content-left-social-icon">
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className="footer-content-left-social-icon">
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div className="footer-content-left-social-icon">
                            <img src={instagram} alt="instagram" />
                        </div>
                        <div className="footer-content-left-social-icon">
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;