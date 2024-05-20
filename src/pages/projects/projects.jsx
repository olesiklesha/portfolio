import {projects} from "../../constants/index.js";
import {Link} from "react-router-dom";
import {arrow} from "../../assets/icons/index.js";
import {ContactMe, Footer} from "../../components/index.js";

export const Projects = () => {
    return (
        <section className="max-container">
            <h2 className="head-text">
                My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
            </h2>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    I've embarked on numerous projects throughout the years, but these are the ones
                    I hold closest to my heart.
                </p>
            </div>

            <div className="flex flex-wrap my-20 gap-16">
                {projects.map((project) => (
                    <div className="lg:w-[400px] w-full" key={project.name}>
                        <div className="block-container w-12 h-12">
                            <div className={`btn-back rounded-xl ${project.theme}`}/>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={project.iconUrl} alt={project.name}
                                     className="w-1/2 h-1/2 object-contain"/>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h3 className="text-2xl font-poppins font-semibold">{project.name}</h3>
                            <p className="mt-2 text-slate-500">{project.description}</p>
                            <div
                                className="mt-5 flex items-center gap-2 hover:gap-3 font-poppins transition-all">
                                <Link to={project.link} target="_blank" rel="noopener noreferrer"
                                      className="font-semibold text-blue-600">
                                    Link
                                </Link>
                                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className="border-slate-200"/>
            <ContactMe/>
            <hr className="border-slate-200"/>
            <Footer/>
        </section>
    );
};
