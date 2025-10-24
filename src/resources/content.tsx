import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aden",
  lastName: "Anteng",
  name: `Aden Anteng`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "anteng@enola.id",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let’s create something that matters.</>,
  description: <>Drop me a line — I’d love to hear from you.</>,
};

const social: Social = [
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
    link: "https://www.linkedin.com/in/adenanteng/",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@adenanteng",
  // },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: `mailto:${person.email}`,
  // },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer and Founder</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Enola</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/enola",
  },
  subline: (
    <>
      Full-stack by day, existential by night, buffering socially 24/7. Welcome aboard! 🤔
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About me`,
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
        I write code, fix bugs, and sometimes create new ones just to keep things interesting. With a background in full-stack development,
        I specialize in making digital products that are both functional and (hopefully) not frustrating.
        <br />
        When I’m not coding, you might find me cruising around on my motorcycle, Aruni.
        Because what’s life without a little bit of adventure?
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Enola Group Indonesia",
        timeframe: "2024 - Present",
        role: "Founder & Software Engineer",
        achievements: [
          <>
            Building a clinic management system so smooth, even doctors approve!
          </>,
          <>
            Enola Clinica is a clinic management app that helps healthcare professionals focus on patients, not paperwork. Less clicking, more healing.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/enola/enola-thumb.jpg",
            alt: "Enola Group Indonesia",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Kuantum Solusi Teknologi",
        timeframe: "2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Keeping Jasa Marga’s website running like a well-oiled toll road!
          </>,
          <>
            At Kuantum Solusi, I maintain and enhance the website for PT Jasa Marga (Persero) Tbk.
            From bug fixes to feature upgrades, I make sure their digital presence is as seamless as their highways (minus the traffic jams).
          </>,
        ],
        images: [],
      },
      {
        company: "GiNK Technology",
        timeframe: "2022 - 2023",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built web apps that actually worked (most of the time) for local health projects.
          </>,
          <>
            Developed and maintained <b>SIMPUS (Sistem Informasi Puskesmas)</b> for Dinas Kesehatan Kabupaten Tanggamus using Laravel, Alpine.js, and MariaDB.
            From database design to debugging and documentation, I did it all — including helping users when things went sideways.
          </>,
        ],
        images: [],
      },
      {
        company: "Medify Indonesia",
        timeframe: "2021 - 2022",
        role: "Software Programmer",
        achievements: [
          <>
            Supported and improved web apps for the healthcare sector — because hospitals need bug-free software too.
          </>,
          <>
            Worked on <b>SIMRS (Sistem Informasi Manajemen Rumah Sakit)</b> for RS Yukum Medical Centre using Laravel and MAriaDB.
            My days were filled with testing, debugging, and saving users from error screens.
          </>,
        ],
        images: [],
      },
      {
        company: "KiriminAja",
        timeframe: "2021",
        role: "Frontend Developer",
        achievements: [
          <>
            Designed and developed clean, reusable UI components before it was cool.
          </>,
          <>
            Worked on <b>Expedition Shipping Aggregator</b> and <b>Order Management & Fulfillment</b> systems using Laravel — helping packages (and projects) get delivered on time.
          </>,
          <>
            Created mockups, templates, and documentation to keep both code and humans on the same page.
          </>,
        ],
        images: [],
      },      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Amikom Yogyakarta",
        description: <>Studied Information Systems.</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>
            Building immersive frontend experiences that blend speed, aesthetics, and precision.
            <br />
            ⚡️ "Fast. Fluid. Future-ready."
          </>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Shadcn/UI",
            icon: "shadcn",
          },
          {
            name: "Radix UI",
            icon: "radix",
          },
          {
            name: "Motion",
            icon: "motion",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Go Fiber",
        description: (
          <>
            Engineering backend systems that run lean, scale fast, and never break a sweat.
            <br />
            🦾 "Go fast, go Fiber."
          </>
        ),
        tags: [
          {
            name: "Go",
            icon: "go",
          },
          {
            name: "Gorm",
            icon: "gorm",
          },
          {
            name: "Websocket",
            icon: "websocket",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Laravel",
        description: (
          <>
            Crafting digital products that are elegant inside and out — clean, maintainable, and built to last.
            <br />
            ❤️ "Because clean code is an art."
          </>
        ),
        tags: [
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "Filament",
            icon: "filament",
          },
          {
            name: "Livewire",
            icon: "livewire",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "Alpine.js",
            icon: "alpine",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Database",
        description: (
          <>
            Designing architectures that keep data flowing — efficient, reliable, and ready for anything.
            <br />
            🧩 "Data-driven, performance-focused."
          </>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MariaDB",
            icon: "mariadb",
          },
          {
            name: "Redis",
            icon: "redis",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Tools & DevOps",
        description: (
          <>
            Automating the invisible — smooth deployments, secure pipelines, and zero-downtime confidence.
            <br />
            ⚙️ "Build. Ship. Repeat."
          </>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Vercel",
            icon: "vercel",
          },
          {
            name: "Railway",
            icon: "railway",
          },
          {
            name: "Cloudflare",
            icon: "cloudflare",
          },
          {
            name: "Github",
            icon: "github",
          },
          {
            name: "Gitlab",
            icon: "gitlab",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Honorable Mentions",
        description: (
          <>
            Living in a workspace that’s fast, distraction-free, and designed for deep focus.
          </>
        ),
        tags: [
          {
            name: "Manjaro as the daily driver.",
            icon: "manjaro",
          },
          {
            name: "Hyprland for a sleek and dynamic workflow.",
            icon: "hyprland",
          },
          {
            name: "Terminal as home — because GUI is optional.",
            icon: "terminal",
          },
          {
            name: "Spotify — because great code deserves a great soundtrack.",
            icon: "spotify",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
