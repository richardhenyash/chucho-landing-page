import Layout from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
    return (
        <Layout
            heroImage="/assets/hero.jpg"
            heroContent={
                <p className="d-flex flex-column align-items-start m-0 contact">
                    <span>
                        <FontAwesomeIcon icon={faPhone} className="fa-sm me-2 icon-secondary"/>
                        +33 7 69 22 11 53
                    </span>
                    <span>
                        <a href="mailto:chuchokozian@gmail.com" className="contact-link">
                            <FontAwesomeIcon href="mailto:chuchokozian@gmail.com" icon={faEnvelope} className="fa-sm me-2 icon-secondary"/>
                        </a>                        
                        <a href="mailto:chuchokozian@gmail.com">chuchokozian@gmail.com</a>
                    </span>
                </p>
            }
            buttonText="Home"
            buttonLink="/"
        />)
};

export default Contact;