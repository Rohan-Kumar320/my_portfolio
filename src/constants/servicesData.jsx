import { FiCode, FiLayers, FiLayout } from "react-icons/fi";

   export const services = [
        {
            id: 1,
            title: "Web Development",
            icon: <FiCode />,
            desc: "High-performance applications built with modern frameworks.",
            details: "Specializing in React, Next.js, and Node.js ecosystems. We focus on writing clean, maintainable code that scales with your business needs.",
            features: ["Custom React Apps", "SEO Optimization", "Tailwind Integration", "API Development"]
        },
        {
            id: 2,
            title: "UI/UX Design",
            icon: <FiLayout />,
            desc: "User-centric interfaces that blend beauty with functionality.",
            details: "Design is more than just looks. We build intuitive user journeys based on behavioral data and modern design principles.",
            features: ["Figma Prototyping", "Design Systems", "Mobile-First UX", "Interactive Animation"]
        },
        {
            id: 3,
            title: "System Architecture",
            icon: <FiLayers />,
            desc: "Scalable backend structures and cloud infrastructure.",
            details: "Robust foundations for complex data. We ensure your application remains stable under heavy load using cloud-native solutions.",
            features: ["Smooth UX Flow", "Database Design", "Services", "Security"]
        }
    ];
