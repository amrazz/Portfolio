// import backend from '../assets/tools/backend.png';
import meliotis from '../assets/projects/meliotis.png';
import learnera from '../assets/projects/learnera.png';
import nike from '../assets/projects/nike.png';
import codblog from '../assets/projects/codblog.png';
import rdcrud from '../assets/projects/rdcrud.png';
import timetrack from '../assets/projects/timetrack.png';
import netflix from '../assets/projects/netflix.png';
import vchat from '../assets/projects/vchat.png';
import brototype from '../assets/tools/brototype.png';



const navigationLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "connect",
        title: "Connect",
    },
];


const slugs = [
    "javascript",
    "django",
    "postgresql",
    "mongodb",
    "react",
    "html5",
    "css3",
    "nextdotjs",
    "amazonwebservices",
    "firebase",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudio",
    "figma"
];


const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Brototype",
        icon: brototype,
        iconBg: "#E6DEDD",
        date: "November 2023 - Present",
        points: [
            "Developed and maintained web applications using React.js for the frontend and Python Django for the backend.",
            "Collaborated with cross-functional teams, including designers, product managers, and developers, to deliver high-quality products.",
            "Implemented responsive designs and ensured cross-browser compatibility for an optimal user experience.",
            "Conducted code reviews to maintain coding standards and provided constructive feedback to team members.",
        ],
    },
];


const projects = [
    {
        name: "Learnera App",
        description: "A robust school management system designed to simplify administrative tasks for staff and enhance organization for students. Includes tools for managing schedules, assignments, and communications, ensuring an efficient and user-friendly experience.",
        tags: ["React JS", "Python Django", "Python", "Postgres SQL", "HTML", "TailwindCSS", "Shad CN"],
        image: learnera,
        source_code_link: "https://github.com/amrazz/learnera-app",
        live_link: "https://learnerapp.site",
        category: "Full Stack"
    },
    {
        name: "CodBlog",
        description: "CodBlog is a modern, full-featured blogging and social platform built with Django REST Framework and React.js, designed to provide users a powerful space to create, share, and engage with content — enhanced by AI, real-time features, and social interactions.",
        tags: ["React JS", "Python Django", "Python", "Postgres SQL", "Gemini", "Editor JS", "React Toastify", "Google Auth"],
        image: codblog,
        source_code_link: "https://github.com/amrazz/cod-blog",
        category: "Full Stack"
    },
    {
        name: "Meliotis - Ecommerce Store",
        description: "An intuitive e-commerce platform enabling users to seamlessly browse, search, add items to their cart, and place orders. Designed to deliver a smooth and enjoyable shopping experience with high-quality products and efficient order management.",
        tags: ["Python Django", "Postgres SQL", "HTML", "CSS", "JS"],
        image: meliotis,
        source_code_link: "https://github.com/",
        category: "Full Stack"
    },
    {
        name: "Time Track - Task Manager",
        description: "As a Django/DRF developer, I built this mini full-stack task management application to explore and understand FastAPI's approach to building modern APIs. This project showcases the differences and similarities between FastAPI and Django REST Framework.",
        tags: ["React JS", "MongoDB", "FastAPI", "TailwindCSS", "Framer Motion"],
        image: timetrack,
        source_code_link: "https://github.com/amrazz/Time-Track",
        category: "Full Stack"
    },
    {
        name: "V Chat - Chat APP",
        description: "A full-stack real-time chat application built with Django, Django REST Framework, Django Channels, React, and Redux.",
        tags: ["React JS", "MongoDB", "FastAPI", "TailwindCSS", "Framer Motion"],
        image: vchat,
        source_code_link: "https://github.com/amrazz/v-chat",
        category: "Full Stack"
    },
    {
        name: "Netflix Clone - React JS",
        description: "A feature-rich clone of the Netflix web application, offering a similar user experience. Includes a dynamic interface for browsing and streaming content, showcasing the core functionalities of the platform's free version.",
        tags: ["React JS", "Firebase", "JSX", "CSS"],
        image: netflix,
        source_code_link: "https://github.com/",
        live_link: "https://netflix-clone-tau-mocha.vercel.app/",
        category: "Frontend"
    },
    {
        name: "Nike - React JS",
        description: "A Nike-themed web application built to practice and enhance my Tailwind CSS skills. Features a clean, responsive design and interactive UI elements inspired by Nike’s official website, focusing on modern frontend styling and layout techniques.",
        tags: ["React JS", , "JSX", "TailwindCSS"],
        image: nike,
        source_code_link: "https://github.com/amrazz/Nike",
        category: "Frontend"
    },
    {
        name: "React Django CURD APP",
        description: "A User profile management app using Django for the backend, React and Redux for the frontend, and Django REST Framework for API management. It includes JWT token-based authentication, and CRUD operations for profiles. The project demonstrates how Django, React, and Redux work together to create a responsive admin panel and user interface.",
        tags: ["React JS", , "JSX", "TailwindCSS", "django", "DRF"],
        image: rdcrud,
        source_code_link: "https://github.com/amrazz/Nike",
        category: "Frontend"
    }
];
const skillSet = [
    {
        name: "React JS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "Node.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "FastAPI",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
        name: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },

    {
        name: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS3",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "Django",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
        name: "Python",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "PostgreSQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },

    {
        name: "Redis",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
        name: "Docker",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
        name: "VS Code",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
        name: "Figma",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
];



export { experiences, projects, navigationLinks, slugs, skillSet };