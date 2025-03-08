import {InlineCode} from "@/once-ui/components";

const person = {
    firstName: "Aden",
    lastName: "Anteng",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Software Engineer",
    avatar: "/images/avatar.jpg",
    location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: (
        <>
            I occasionally write about design, technology, and share thoughts on the intersection of
            creativity and engineering.
        </>
    ),
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/adenanteng",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/adenanteng",
    },
    {
        name: "Email",
        icon: "email",
        link: "mailto:anteng@enola.id",
    },
];

const home = {
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer and Founder</>,
    subline: (
        <>
            👋 Hey there! Welcome to my digital playground. I’m a <InlineCode>full-stack developer</InlineCode> by day, a
            comedian by night, and an
            introvert 24/7. I build web apps that actually work (most of the time). Scroll around,
            and let’s make some pixels do the magic!
        </>
    ),
};

const about = {
    label: "About",
    title: "About me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: false,
        link: "https://cal.com",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                I write code, fix bugs, and sometimes create new ones just to keep things interesting. With a background
                in full-stack development, I specialize in making digital products that are both functional and
                (hopefully) not frustrating.
                <br />&nbsp;<br />
                When I’m not coding, you might find me cracking jokes or cruising around on my motorcycle, Aruni.
                Because what’s life without a little bit of adventure?
            </>
        ),
    },
    work: {
        display: true, // set to false to hide this section
        title: "Work Experience",
        experiences: [
            {
                company: "Cendekia",
                timeframe: "2025 - Present",
                role: "Founder",
                achievements: [
                    <>
                        (Because education deserves better websites!)
                    </>,
                    <>
                        Cendekia is a modern school website platform designed to make school administration and
                        communication
                        smoother. Think of it as the ultimate cheat sheet for schools—without the cheating part.
                    </>,
                ],
                images: [],
            },
            {
                company: "Enola",
                timeframe: "2024 - Present",
                role: "Founder",
                achievements: [
                    <>
                        (Building a clinic management system so smooth, even doctors approve!)
                    </>,
                    <>
                        Enola Clinica is a clinic management app that helps healthcare professionals focus on patients,
                        not paperwork. Less clicking, more healing.
                    </>,
                ],
                images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                        src: "/images/projects/enola/hero.png",
                        alt: "Enola Clinica",
                        width: 16,
                        height: 8,
                    },
                ],
            },
            {
                company: "Kuantum Solusi",
                timeframe: "2024 - Present",
                role: "Full-Stack Developer",
                achievements: [
                    <>
                        (Keeping Jasa Marga’s website running like a well-oiled toll road!)
                    </>,
                    <>
                        At Kuantum Solusi, I maintain and enhance the website for PT Jasa Marga (Persero) Tbk.
                        From bug fixes to feature upgrades, I make sure their digital presence is as seamless as
                        their highways (minus the traffic jams).
                    </>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: false, // set to false to hide this section
        title: "Studies",
        institutions: [
            {
                name: "University of AMIKOM Yogyakarta",
                description: <>Studied software engineering.</>,
            },
            {
                name: "Build the Future",
                description: <>Studied online marketing and personal branding.</>,
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Technical skills",
        skills: [
            {
                title: "Frontend",
                description: <>Next.js, Nuxt.js (Yes, I like both 🥲)</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    // {
                    //     src: "/images/projects/project-01/cover-02.jpg",
                    //     alt: "Project image",
                    //     width: 16,
                    //     height: 9,
                    // },
                    // {
                    //     src: "/images/projects/project-01/cover-03.jpg",
                    //     alt: "Project image",
                    //     width: 16,
                    //     height: 9,
                    // },
                ],
            },
            {
                title: "Backend",
                description: <>Laravel, NestJS, Node.js</>,
                images: [],
            },
            {
                title: "Database",
                description: <>MySQL, PostgreSQL, Redis</>,
                images: [],
            },
            {
                title: "Tools & DevOps",
                description: <>Docker, DigitalOcean, Filament PHP, Linux (CLI all the way!)</>,
                images: [],
            },
            {
                title: "Others",
                description:
                    <>
                        Tailwind CSS (because styling should be fun), Sanctum (because security matters), and a deep
                        love for refactoring (or making things worse before they get better).
                    </>,
                images: [],
            },
        ],
    },
};

const blog = {
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    label: "Work",
    title: "My projects",
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    label: "Gallery",
    title: "My photo gallery",
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: "/images/gallery/img-01.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-02.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-03.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-04.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-05.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-06.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-07.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-08.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-09.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-10.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-11.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-12.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-13.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-14.jpg",
            alt: "image",
            orientation: "horizontal",
        },
    ],
};

export {person, social, newsletter, home, about, blog, work, gallery};
