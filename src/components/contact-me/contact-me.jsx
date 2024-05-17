import {Link} from "react-router-dom";

export const ContactMe = () => {
    return (
        <section className="cta">
            <p className="cta-text">
                Let's build something together!
            </p>
            <Link to="/contact" className="btn">Contact</Link>
        </section>
    );
};
