import {socialLinks} from "../../constants/index.js";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© 2024 <span className="font-semibold">Aliaksei Olesik</span></p>
                <div className="flex gap-2">
                    {socialLinks.map((socialLink) => (
                        <a key={socialLink.name} className="flex w-5 h-5"
                           href={socialLink.link}
                           target={socialLink.name === 'Contact' ? '_self' : '_blank'}>
                            <img src={socialLink.iconUrl} alt={socialLink.name}/>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
