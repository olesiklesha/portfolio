import {
    antd,
    clever,
    coffee,
    css,
    git,
    github,
    html,
    javascript,
    jest,
    linkedin,
    momentum,
    mui,
    nodejs,
    question,
    quiz,
    react,
    redux,
    rss,
    samurai,
    sass,
    tailwindcss,
    trello,
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
        linkUrl: 'https://app.rs.school/certificate/5uolcood',
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
        linkUrl: 'https://app.rs.school/certificate/m821u0i1',
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
        linkUrl: 'https://app.rs.school/certificate/q978y1l5',
        points: [
            "Consolidated and expanded basic knowledge of HTML and CSS",
            "Got basic knowledge of JavaScript.",
            "Consolidated the knowledge gained by writing several small projects (for example, a custom video player)",
        ],
    },
];

export const socialLinks = [
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
        iconUrl: clever,
        theme: 'btn-back-red',
        name: 'CleverFIT',
        description: 'An app in which you can create a personal and joint workouts, you can also configure your profile, view your achievements and users feedback.',
        link: 'https://github.com/olesiklesha/cleverFIT',
    },
    {
        iconUrl: trello,
        theme: 'btn-back-green',
        name: 'Trello analogue',
        description: 'This app will help you collaborate on your projects and reach new peaks of productivity. It also supports multiple languages.',
        link: 'https://pma-olesiklesha.netlify.app/',
    },
    {
        iconUrl: quiz,
        theme: 'btn-back-yellow',
        name: 'Art quiz',
        description: 'In this app you\'ll be able to test your knowledge in painting. The app allows you to play two variations of the quiz: guess the author or guess the picture.',
        link: 'https://olesiklesha-art-quiz.netlify.app/',
    },
    {
        iconUrl: coffee,
        theme: 'btn-back-pink',
        name: 'Coffee house',
        description: 'A small multi-page website for a coffee shop filled with nice animations and functionality. Optimization was also carried out at a high level.',
        link: 'https://rolling-scopes-school.github.io/olesiklesha-JSFE2023Q4/coffee-house/',
    },
    {
        iconUrl: samurai,
        theme: 'btn-back-blue',
        name: 'Nonograms',
        description: 'A Japanese puzzle is a puzzle in which, unlike ordinary crosswords, not words are encoded, but an image.',
        link: 'https://rolling-scopes-school.github.io/olesiklesha-JSFE2023Q4/nonograms/',
    },
    {
        iconUrl: momentum,
        theme: 'btn-back-black',
        name: 'Momentum',
        description: 'A personal dashboard to help you get focused, stay organized, and keep motivated to achieve your goals.',
        link: 'https://rolling-scopes-school.github.io/olesiklesha-JSFE2021Q3/momentum/',
    }
];
