export const aboutInfo = [
    {
        name: "Experience",
        description:
            "4 years of professional experience in frontend development, with a strong focus on ReactJS and Next Js",
    },
    {
        name: "Programming Languages",
        description: "Proficiency in TypeScript JavaScript, HTML, and CSS",
    },
    {
        name: "Frameworks and Libraries",
        description: "Strong understanding of ReactJS, NextJS Redux Graphql",
    },
    {
        name: "Tooling and Workflow",
        description:
            "Familiarity with modern build tools (Webpack, Babel), version control systems (Git), and CI/CD pipelines.",
    },

    {
        name: "Communication",
        description:
            "Communication: Strong verbal and written communication skills, with the ability to work effectively in a team environment.",
    },
];

export const mySkils = [
    {
        name: "Develop and Maintain Web Applications",
        description: `
                Build and maintain responsive and
                user-friendly web applications using
                ReactJS, NextJS.
                  `,
    },
    {
        name: "Collaborate with Cross-Functional Teams",
        description: `
                Work with designers, product managers,
                and backend developers to ensure the
                best possible user experience and to
                deliver high-quality products.
              `,
    },
    {
        name: "Problem-Solving Skills",
        description:
            "Have excellent problem-solving skills, with the ability to break down complex problems into manageable parts",
    },
    {
        name: "Write Clean and Efficient Code",
        description: `
                  Follow best practices for coding, testing to Write clean, maintainable, and efficient code.
            `,
    },
    {
        name: "Debug and Optimize Performance",
        description: `
                Identify and fix bugs, and optimize application
                performance to ensure a smooth user
                experience.          `,
    },
    {
        name: "Stay Updated with Industry Trends",
        description: `
                Keep up-to-date with the latest developments
                in frontend development, ReactJS,
                NextJS, VueJS, and related technologies        `,
    },
];

export const skillsData = [
    {
        name: "React Js",
        logo: "/assets/React.webp",
        level: "Intermediate",
        description: "Advanced image editing and manipulation",
        experience: "7+ years of daily use in professional projects",
        projects: [
            "Brand identity design",
            "Photo retouching",
            "Digital art creation",
        ],
    },
    {
        name: "Next Js",
        logo: "/assets/next.png",
        level: "Intermediate",
        description: "Advanced image editing and manipulation",
        experience: "7+ years of daily use in professional projects",
        projects: [
            "Brand identity design",
            "Photo retouching",
            "Digital art creation",
        ],
    },
    {
        name: "Typescript",
        logo: "/assets/typescript.png",
        level: "Intermediate",
        description: "Vector graphics and illustration",
        experience:
            "5+ years of extensive use in logo design and illustrations",
        projects: ["Logo design", "Icon creation", "Vector illustrations"],
    },
    {
        name: "Redux",
        logo: "/assets/redux.png",
        level: "Intermediate",
        description: "Page layout and publication design",
        experience: "5 years of regular use in creating marketing materials",
        projects: ["Brochure design", "Magazine layouts", "Annual reports"],
    },
    {
        name: "Graphql",
        logo: "/assets/graphql.webp",
        level: "Intermediate",
        description: "UI/UX design and prototyping",
        experience: "4 years of daily use in web and app design projects",
        projects: [
            "Website mockups",
            "Mobile app interfaces",
            "Interactive prototypes",
        ],
    },
    {
        name: "Tailwind css",
        logo: "/assets/tailwind.png",
        level: "Intermediate",
        description: "Digital design for web and mobile interfaces",
        experience: "3 years of occasional use in UI design projects",
        projects: ["Web design", "Icon design", "UI kits"],
    },
    {
        name: "JavaScript",
        logo: "/assets/Javascript.png",
        level: "Intermediate",
        description: "UI/UX design and prototyping",
        experience: "+3 year of exploratory use in small projects",
        projects: [
            "Basic wireframing",
            "Simple prototypes",
            "Collaboration with XD users",
        ],
    },
    {
        name: "Git",
        logo: "/assets/git.png",
        level: "Intermediate",
        description: "UI/UX design and prototyping",
        experience: "+3 year of exploratory use in small projects",
        projects: [
            "Basic wireframing",
            "Simple prototypes",
            "Collaboration with XD users",
        ],
    },
];

export const MyWorks = [
    {
        id: 1,
        name: "Remax Royal",
        description: "Real Estate Agency",
        image: "/images/remax-royal.png",
        url: "https://remaroyal.net",
        showcase: {
            overview:
                "Remax Royal is a modern real estate platform designed to simplify property buying, selling, and renting. The platform ensures users can easily browse through an extensive catalog of properties with advanced filters, interactive maps, and detailed listings tailored for both commercial and residential markets.",
            objectives: [
                "Develop a user-friendly platform for property buying and renting.",
                "Ensure seamless navigation and advanced search capabilities.",
                "Provide detailed property information with an intuitive design.",
                "Integrate secure APIs for handling real-time data updates.",
            ],
            challenges: [
                "Creating a robust and scalable architecture to handle large property data.",
                "Implementing real-time filtering and searching features.",
                "Ensuring a responsive and visually appealing design across devices.",
                "Integrating backend services with Prisma for efficient database management.",
            ],
            solutions: [
                {
                    name: "Scalable Architecture",
                    description:
                        "Built a scalable application using React, Next.js, and Prisma to handle high traffic and large datasets efficiently.",
                },
                {
                    name: "Advanced Search and Filter",
                    description:
                        "Implemented dynamic filtering and sorting features for properties based on location, price range, and property type.",
                },
                {
                    name: "Responsive Design",
                    description:
                        "Utilized Tailwind CSS to create a responsive, visually appealing interface optimized for all devices.",
                },
                {
                    name: "Secure Backend Integration",
                    description:
                        "Integrated a secure backend with TypeScript and Prisma to manage real-time property data and ensure consistency.",
                },
            ],
            framework: [
                {
                    name: "React",
                    logo: "/assets/React.webp", // Replace with actual React logo path
                },
                {
                    name: "Next.js",
                    logo: "/assets/next.png", // Replace with actual Next.js logo path
                },
                {
                    name: "TypeScript",
                    logo: "/assets/typescript.png", // Replace with actual TypeScript logo path
                },
                {
                    name: "Tailwind CSS",
                    logo: "/assets/tailwind.png", // Replace with actual Tailwind CSS logo path
                },
            ],
            resposability: [
                "Designed and developed the frontend using React and Next.js.",
                "Integrated the backend with Prisma for efficient database management.",
                "Created responsive, user-friendly layouts with Tailwind CSS.",
                "Implemented real-time search and filter functionality for property listings.",
            ],
        },
    },
    {
        id: 2,
        name: "Remax Royal CMS Dashboard",
        description: "Admin dashboard",
        image: "/images/cms-admin.png",
        url: null,
        showcase: {
            overview:
                "The Remax Royal CMS Dashboard is a powerful administrative tool designed to simplify the management of the Remax Royal platform. It allows admins to oversee property listings, user accounts, and transaction data efficiently, with real-time updates and analytics.",
            objectives: [
                "Provide an efficient system for managing properties and users.",
                "Enable real-time monitoring and editing of platform data.",
                "Ensure secure role-based access control for administrators.",
                "Design a clean and user-friendly dashboard interface.",
            ],
            challenges: [
                "Handling complex data relationships between properties, users, and transactions.",
                "Ensuring data security and role-based access for different admin levels.",
                "Creating intuitive workflows for property approvals and edits.",
                "Real-time synchronization of changes across the platform.",
            ],
            solutions: [
                {
                    name: "Data Management System",
                    description:
                        "Developed a robust backend with Prisma to handle relationships and manage large datasets effectively.",
                },
                {
                    name: "Role-Based Access Control (RBAC)",
                    description:
                        "Implemented secure access levels using NextAuth and JWT for role-based authentication.",
                },
                {
                    name: "Responsive Admin Interface",
                    description:
                        "Designed a sleek and responsive dashboard interface using Tailwind CSS and React.",
                },
                {
                    name: "Real-Time Updates",
                    description:
                        "Integrated WebSockets to ensure real-time updates for property approvals and status changes.",
                },
            ],
            framework: [
                {
                    name: "React",
                    logo: "/assets/React.webp", // Replace with actual React logo path
                },
                {
                    name: "Next.js",
                    logo: "/assets/next.png", // Replace with actual Next.js logo path
                },
                {
                    name: "TypeScript",
                    logo: "/assets/typescript.png", // Replace with actual TypeScript logo path
                },
                {
                    name: "Tailwind CSS",
                    logo: "/assets/tailwind.png", // Replace with actual Tailwind CSS logo path
                },
            ],
            resposability: [
                "Developed the admin dashboard interface using React and Next.js.",
                "Integrated backend services with Prisma for database operations.",
                "Implemented role-based access control with NextAuth and JWT.",
                "Created property management workflows for approval and editing.",
                "Ensured real-time data synchronization with WebSocket integration.",
            ],
        },
    },
    {
        id: 3,
        name: "SuefyAds Dashboard",
        description: "Affiliate platform dashboard",
        image: "/images/suefyads.png", // Replace with actual image path
        url: null, // Replace with actual URL
        showcase: {
            overview:
                "SuefyAds Dashboard is a modern solution designed for affiliate marketing platforms. It streamlines the management of coupon codes, tracks affiliate performance, and provides real-time analytics to optimize marketing campaigns for advertisers and affiliates.",
            objectives: [
                "Build a platform to manage and track affiliate coupon codes effectively.",
                "Provide detailed analytics for affiliate and advertiser performance.",
                "Ensure secure handling of user data and financial transactions.",
                "Create a user-friendly interface for easy management of campaigns.",
            ],
            challenges: [
                "Designing a system to handle dynamic coupon code generation and tracking.",
                "Providing real-time performance insights with minimal latency.",
                "Implementing secure user roles and permissions for advertisers and affiliates.",
                "Creating a responsive and intuitive dashboard for diverse user needs.",
            ],
            solutions: [
                {
                    name: "Dynamic Coupon Code Management",
                    description:
                        "Implemented a system for generating, tracking, and deactivating coupon codes with detailed audit logs.",
                },
                {
                    name: "Real-Time Analytics",
                    description:
                        "Integrated charting libraries and WebSocket connections to provide real-time performance metrics.",
                },
                {
                    name: "Role-Based Access Control (RBAC)",
                    description:
                        "Used NextAuth and secure database queries to enforce role-specific permissions for advertisers and affiliates.",
                },
                {
                    name: "Responsive Dashboard Design",
                    description:
                        "Developed a sleek, responsive UI with Tailwind CSS and React, ensuring usability across devices.",
                },
            ],
            framework: [
                {
                    name: "React",
                    logo: "/assets/React.webp", // Replace with actual React logo path
                },
                {
                    name: "Javascript",
                    logo: "/assets/Javascript.png", // Replace with actual Next.js logo path
                },
                {
                    name: "Redux",
                    logo: "/assets/redux.png", // Replace with actual TypeScript logo path
                },
                {
                    name: "Tailwind CSS",
                    logo: "/assets/tailwind.png", // Replace with actual Tailwind CSS logo path
                },
            ],
            resposability: [
                "Developed the dashboard interface using React and Next.js.",
                "Built secure coupon management workflows with real-time tracking.",
                "Integrated analytics features for affiliate and advertiser performance.",
                "Implemented role-based access control for different user types.",
                "Ensured scalability and responsiveness of the dashboard design.",
            ],
        },
    },
    {
        id: 4,
        name: "Madrid Hotels Landing Page",
        description: "Hotel reserveing Landing page",
        image: "/images/booking.png", // Replace with actual image path
        url: "https://alkhasm.com/madrid-hotels/",
        showcase: {
            overview:
                "The Madrid Hotels landing page offers a user-centric platform to explore and book hotels in Madrid. With a clean and modern design, it simplifies hotel selection by featuring curated listings, personalized recommendations, and an easy-to-use interface.",
            objectives: [
                "Create an engaging landing page to drive hotel bookings in Madrid.",
                "Ensure a seamless user experience for browsing and booking hotels.",
                "Highlight key features such as amenities, pricing, and location for each listing.",
                "Integrate secure APIs to display up-to-date hotel availability and pricing.",
            ],
            challenges: [
                "Designing a visually appealing layout that captures user attention.",
                "Providing real-time data integration for hotel availability and pricing.",
                "Ensuring the page is mobile-friendly and responsive.",
                "Optimizing page load speed to enhance user experience.",
            ],
            solutions: [
                {
                    name: "Modern UI/UX Design",
                    description:
                        "Developed a visually appealing and intuitive interface using Tailwind CSS, ensuring users can easily navigate the page and find hotels that meet their preferences.",
                },
                {
                    name: "Dynamic Data Integration",
                    description:
                        "Integrated APIs to fetch real-time hotel data, including pricing, availability, and amenities, providing users with accurate and updated information.",
                },
                {
                    name: "Responsive Design",
                    description:
                        "Implemented a fully responsive design to ensure the page works seamlessly across all devices, including smartphones, tablets, and desktops.",
                },
                {
                    name: "Performance Optimization",
                    description:
                        "Optimized assets, lazy-loaded images, and minimized requests to achieve fast page load times, enhancing overall user satisfaction.",
                },
            ],
            framework: [
                {
                    name: "JavaScript",
                    logo: "/assets/Javascript.png",
                },
                {
                    name: "HTML",
                    logo: "/assets/html.webp",
                },
                {
                    name: "CSS",
                    logo: "/assets/css.png",
                },
                {
                    name: "Tailwind",
                    logo: "/assets/tailwind.png",
                },
                // {
                //     name: "API Integration",
                //     logo: "/assets/api.png", // Replace with actual API-related logo path
                // },
            ],
            resposability: [
                "Designed and developed the landing page with a focus on user engagement.",
                "Integrated APIs to fetch and display hotel data dynamically.",
                "Implemented responsive layouts and optimized UI components with Tailwind CSS.",
                "Enhanced performance through code splitting, lazy loading, and asset optimization.",
                "Tested and debugged cross-browser compatibility to ensure consistency across devices.",
            ],
        },
    },
    {
        id: 5,
        name: "Airbnb Clone",
        description: "The Airbnb Clone project",
        image: "/images/airbnb-clone.png", // Replace with actual image path
        url: "https://github.com/ahmedhussein36/airbnb-clone-next-13", // Replace with the actual URL if available
        showcase: {
            overview:
                "The Airbnb Clone project is a feature-rich web application that replicates the core functionalities of Airbnb. It enables users to discover unique stays, list their properties, and manage bookings in an interactive and user-friendly interface.",
            objectives: [
                "Develop a modern vacation rental platform with intuitive UX/UI.",
                "Allow users to book stays and list properties effortlessly.",
                "Incorporate dynamic search, filtering, and map functionalities.",
                "Integrate a secure backend for user authentication and booking management.",
            ],
            challenges: [
                "Building a scalable architecture to support both hosting and booking functionalities.",
                "Implementing dynamic search filters and map integration.",
                "Ensuring data consistency and real-time updates for bookings.",
                "Creating a visually appealing and responsive UI for a diverse audience.",
            ],
            solutions: [
                {
                    name: "Scalable Architecture",
                    description:
                        "Designed a robust backend with Prisma and TypeScript to handle a large volume of users, properties, and bookings efficiently.",
                },
                {
                    name: "Dynamic Search and Map Integration",
                    description:
                        "Implemented advanced filtering options and integrated Google Maps API for location-based searches and property visualization.",
                },
                {
                    name: "Responsive UI/UX Design",
                    description:
                        "Used Tailwind CSS to create a modern and responsive design that provides an engaging user experience across all devices.",
                },
                {
                    name: "Authentication and Booking System",
                    description:
                        "Integrated secure user authentication and developed a comprehensive booking system with real-time status updates.",
                },
            ],
            framework: [
                {
                    name: "React",
                    logo: "/assets/React.webp",
                },
                {
                    name: "Next.js",
                    logo: "/assets/next.png",
                },
                {
                    name: "TypeScript",
                    logo: "/assets/typescript.png",
                },
                {
                    name: "Prisma",
                    logo: "/assets/prisma.png",
                },
                {
                    name: "Tailwind CSS",
                    logo: "/assets/tailwind.png",
                },
            ],
            resposability: [
                "Developed the frontend with React and Next.js to ensure a seamless user experience.",
                "Integrated secure user authentication and session management.",
                "Designed and implemented the booking system with real-time updates.",
                "Added advanced filtering and map-based search functionalities.",
                "Created a responsive and visually appealing interface using Tailwind CSS.",
            ],
        },
    },
];
