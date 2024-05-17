import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {experiences, skills} from "../../constants/index.js";

export const About = () => {
    return (
        <section className="max-container">
            <h2 className="head-text">
                Hello,
                I'm <span className="blue-gradient_text font-semibold drop-shadow">Aliaksei</span>
            </h2>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    Frontend developer with technical education.
                    I really into in working with complex tasks, new technologies and finding the
                    best solutions. I know how to work in a team and see a common goal.
                    <br/>
                    Things I like: a clean code, music and football.
                    <br/>
                    Things I don't like:
                    factory, unfinished tasks.
                </p>
            </div>

            <div className="py-10 flex flex-col">
                <h2 className="subhead-text">My Skills</h2>

                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div key={skill.name} className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl"/>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={skill.imageUrl} alt={skill.name}
                                     className="w-1/2 h-1/2 object-contain"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <h2 className="subhead-text">Experience</h2>

                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        I studied on my own and also took various courses, improving my skills and
                        teaming up with smart people. Here's the rundown:
                    </p>
                </div>

                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((el) => (
                            <VerticalTimelineElement
                                key={el.company_name}
                                // date={el.date}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img src={el.icon} alt={el.company_name}
                                             className="w-[60%] h-[60%] object-contain"/>
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: el.iconBg,
                                    boxShadow: 'none'
                                }}
                                iconStyle={{
                                    background: el.iconBg
                                }}
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">
                                        {el.title}
                                    </h3>
                                    <p className="text-black-500 font-medium font-base"
                                       style={{margin: 0}}>
                                        {el.company_name}
                                    </p>
                                </div>

                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {el.points.map((point, i) => (
                                        <li key={i}
                                            className="text-black-500/50 font-normal pl-1 text-sm">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className="border-slate-200"/>
        </section>
    );
};
