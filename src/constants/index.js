import {meta, shopify, starbucks, tesla} from "../assets/images";
import {
    antd,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript, jest,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise, question,
    react,
    redux, rss,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: jest,
        name: "Jest",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: antd,
        name: "antd",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "My future dream company",
        icon: question,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "I will develop and maintain web applications using React.js and other related technologies.",
            "I will collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "I will implement responsive design and ensuring cross-browser compatibility.",
            "Will take part in code reviews and provide constructive feedback to other developers.",
        ],
    },
    {
        title: "ReactJS Course",
        company_name: "The Rolling Scope School",
        icon: rss,
        iconBg: "#ffe9a2",
        date: "Jan 2023 - Present",
        points: [
            "Working with class components, React 16.8.",
            "Gaining skills in working with state managers and ui libraries.",
            "Working with the router, forms and REST API.",
            "Gaining basic testing skills.",
            "Improving teamwork skills during the final task.",
        ],
    },
    {
        title: "Frontend/JavaScript Course",
        company_name: "The Rolling Scope School",
        icon: rss,
        iconBg: "#ffe9a2",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Creation of single-page and multi-page sites.",
            "Deep learning of JS: methods, working with DOM, asynchronous programming.",
            "Creation of SPA of varying complexity.",
            "Gaining teamwork skills when completing the final task.",
        ],
    },
    {
        title: "JS/FE pre-school Course",
        company_name: "The Rolling Scope School",
        icon: rss,
        iconBg: "#ffe9a2",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Consolidated and expanded basic knowledge of HTML and CSS",
            "Got basic knowledge of JavaScript.",
            "Consolidated the knowledge gained by writing several small projects (for example, a custom video player)",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/olesiklesha',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/olesiklesha',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
