import {Link} from "react-router-dom";
import {arrow} from "../../assets/icons";

// eslint-disable-next-line react/prop-types
const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img className="w-4 h-4 object-contain" src={arrow} alt="logo"/>
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h2 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Aliaksei</span>
            <br/>
            A Frontend Developer
        </h2>
    ),
    2: (
        <InfoBox
            text="Worked with many companies and picked up many skills along the way"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Led multiple projects to success over the years. Curious about th empact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's talk"
        />
    ),
};


// eslint-disable-next-line react/prop-types
export const HomeInfo = ({stage}) => {
    return renderContent[stage] || null;
};
