import wellnexImage from "../assets/wellnex.png";
import lapverseImage from "../assets/lapversemain.png"

export const stats = [
  { id: 1, count: "5+", label: "Years Experience", detail: "In Full Stack Dev" },
  { id: 2, count: "40+", label: "Projects Completed", detail: "Global Clients" },
  { id: 3, count: "12", label: "Design Awards", detail: "UI/UX Excellence" },
  { id: 4, count: "100%", label: "Client Satisfaction", detail: "Repeat Business" },
];

export const skills = ["React / Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL"];


// export const services = [
//   { id: 1, title: "Web Architecture", desc: "Building scalable, type-safe foundations using Next.js and Node." },
//   { id: 2, title: "Interactive UI", desc: "Creating fluid, motion-rich interfaces that engage users." },
//   { id: 3, title: "Product Strategy", desc: "Bridging the gap between technical logic and business goals." }
// ];

export const hobbies = [
  { id: 1, title: "Badminton", img: "/projects/batminton.png" },
  { id: 2, title: "Reading", img: "/projects/reading.png" },
];



// MY PROJECTS:


// src/constants/projectData.js


export const projects = [


    // ==========================================================
    // LAPVERSE MARKETPLACE 
    // ==========================================================

{
    id: 1,

    title: "Lapverse",

    type: "web",

    category: "E-Commerce / Full Stack Web Application",

    shortDescription:
        "A full-stack laptop marketplace and e-commerce platform featuring product discovery, advanced filtering, shopping cart functionality, authentication, and dedicated seller and admin management workflows.",

    description:
        "Lapverse is a modern full-stack laptop marketplace built with the MERN stack. The platform provides buyers with a responsive shopping experience for discovering and purchasing laptops, while dedicated seller and administrator interfaces provide tools for product, inventory, user, order, and sales management.",

    image: lapverseImage,

    screenshots: [
        "/projects/lapverse1.png",
        "/projects/lapverse2.png",
        "/projects/lapverse3.png",
    ],

    tags: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Tailwind CSS",
        "React Router",
        "Axios",
        "JWT",
        "Cloudinary",
        "REST API",
    ],

    role: "Full Stack Developer",

    duration: "8 Weeks",

    features: [
        {
            title: "Product Catalog & Advanced Filtering",
            description:
                "Browse a structured laptop catalog with product search and filtering capabilities based on relevant product attributes and specifications.",
        },

        {
            title: "Shopping Cart & Order Management",
            description:
                "Users can manage products in their shopping cart and progress through the purchasing workflow while keeping track of their orders.",
        },

        {
            title: "User Authentication & Role-Based Access",
            description:
                "Secure authentication with dedicated workflows and permissions for buyers, sellers, and administrators.",
        },

        {
            title: "Seller Product Management",
            description:
                "Dedicated seller functionality for managing marketplace products, inventory, and product information.",
        },

        {
            title: "Admin Dashboard & Marketplace Management",
            description:
                "Administrative tools for managing users, products, orders, sales, marketplace settings, and other platform operations.",
        },

        {
            title: "RESTful API & Database Architecture",
            description:
                "Node.js and Express.js REST APIs backed by MongoDB and Mongoose for structured data management and communication between the frontend and backend.",
        },

        {
            title: "Cloud-Based Image Management",
            description:
                "Product imagery is handled through cloud-based storage and upload processing, supporting efficient management of marketplace media.",
        },
    ],

    challenge:
        "Building a scalable marketplace architecture that could support different user roles while efficiently managing laptop products, technical specifications, inventory, carts, orders, and administrative operations.",

    solution:
        "Developed a MERN-based architecture with MongoDB and Mongoose for flexible data modeling, Express.js REST APIs for backend operations, and a React/Tailwind CSS frontend for responsive interfaces. Role-based authentication separates buyer, seller, and administrator workflows, while dedicated management interfaces provide control over products, users, inventory, orders, and sales.",

    links: {
        live: "https://lapverse-kohl.vercel.app/",
        github: "https://github.com/Rohan-Kumar320/LapVerse.git",
        apk: null,
    },

    isFeatured: true,
},

    // ==========================================================
    // WELLNEX SYSTEMS
    // ==========================================================

{
    id: 2,

    title: "Wellnex Systems",

    type: "web",

    category: "SaaS Dashboard / Web Application",

    shortDescription:
        "A modern Gym Management System designed for intuitive administration, member tracking, and operational automation.",

    description:
        "Wellnex Systems is a multi-role Gym Management System designed with a strong focus on usability, responsive UI engineering, and high-density data management. The platform streamlines gym operations—from membership tracking and class scheduling to financial analytics—while delivering a seamless client-side experience.",

    image: wellnexImage,

    screenshots: [
        "/projects/wellnex3.png",
        "/projects/wellnex1.png",
        "/projects/wellnex2.png",
    ],

    tags: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "JavaScript",
    ],

    role: "Frontend Developer",

    duration: "3 Weeks",

    features: [
        {
            title: "Multi-Role Dashboard & Access Control",
            description:
                "Custom visual layouts and permission flows built for gym owners, trainers, staff, and members.",
        },

        {
            title: "Membership & Subscription Tracking",
            description:
                "Tiered plans, status indicators, and streamlined checkout UI for recurring member payments.",
        },

        {
            title: "Trainer & Class Scheduling",
            description:
                "Interactive booking system for managing personal training sessions and group fitness classes.",
        },

        {
            title: "Performance & Analytics Data",
            description:
                "Data-dense visual components displaying real-time operational KPIs, attendance metrics, and revenue breakdown.",
        },
    ],

    challenge:
        "Designing a data-heavy management dashboard that balances extensive functionality with a clean, high-contrast visual hierarchy and smooth client-side interactions.",

    solution:
        "Engineered the platform using a modular React architecture styled with a custom dark theme in Tailwind CSS and dynamic modal transitions powered by Framer Motion.",

    links: {
        live: "https://wellnex-systems.vercel.app/",
        github: "https://github.com/Rohan-Kumar320/Wellnex-Systems.git",
        apk: null,
    },

    isFeatured: true,
},

    // // ==========================================================
    // // NEURAL NET
    // // ==========================================================

    // {
    //     id: 4,

    //     title: "Neural Net",

    //     type: "web",

    //     category: "Data Visualization",

    //     shortDescription:
    //         "A data visualization platform for exploring and presenting machine learning models and complex datasets.",

    //     description:
    //         "Neural Net is a visualization-focused web project created to make complex machine learning information easier to explore and understand.",

    //     image:
    //         "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",

    //     screenshots: [
    //         "https://images.unsplash.com/photo-1509228468518-180dd48a5793?q=80&w=1200",
    //         "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    //         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    //     ],

    //     tags: [
    //         "Python",
    //         "TensorFlow",
    //         "Data Visualization",
    //     ],

    //     role: "Developer",

    //     duration: "4 Weeks",

    //     features: [
    //         {
    //             title: "Data Visualization",
    //             description:
    //                 "Complex datasets are presented through clear visual representations.",
    //         },

    //         {
    //             title: "Interactive Experience",
    //             description:
    //                 "Users can explore information through an interactive interface.",
    //         },
    //     ],

    //     challenge:
    //         "Making complex machine learning information easier to explore without overwhelming the user.",

    //     solution:
    //         "The interface focuses on visual hierarchy and structured data presentation to make technical information easier to understand.",

    //     links: {
    //         live: null,
    //         github: "https://github.com/yourusername/neural-net-viz",
    //         apk: null,
    //     },

    //     isFeatured: false,
    // },

];