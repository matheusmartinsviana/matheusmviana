import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Matheus",
  lastName: "Viana",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Sao_Paulo", // IANA time zone identifier
  languages: ["Portuguese", "English"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about web development, technology, and share insights on the latest frontend trends.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/matheusmartinsviana",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/matheusmartinsviana",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:matheusmviana@outlook.com.br",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend Developer & Tech Enthusiast</>,
  subline: (
    <>
      I'm Viana, a Frontend Developer at <InlineCode>MG TECH</InlineCode>, crafting intuitive and responsive user interfaces.
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
    display: true,
    link: "https://cal.com/matheusmartins",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Matheus is a Brazil-based frontend developer with a passion for building scalable and high-performance web applications.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "MG TECH",
        timeframe: "2023 - Present",
        role: "Frontend Developer",
        achievements: [
          <>Developed and optimized high-performance user interface components using React and Tailwind CSS, ensuring seamless performance and maintainability.</>,
          <>Implemented advanced responsive design techniques, resulting in consistent and intuitive user experiences across all screen sizes.</>,
          <>Collaborated closely with designers and backend developers to align functionality with modern UI/UX standards.</>,
        ],
        images: [],
      },
      {
        company: "Freelance Projects",
        timeframe: "2022 - Present",
        role: "Fullstack Developer",
        achievements: [
          <>Built fully customized e-commerce platforms and conversion-focused landing pages tailored to diverse business needs.</>,
          <>Integrated third-party APIs, payment gateways, and automation tools to enhance the capabilities and efficiency of client projects.</>,
          <>Managed the entire development cycle — from requirement analysis to deployment — ensuring timely and high-quality deliveries.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Senac Joinville College",
        description: <>(2023/01 - 2025/06)<br/>Studied Analysis and Systems Development.</>,
      },
      {
        name: "Udemy & Alura",
        description: <>Courses on React, Node.js, and Web Development.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "⚛️ React.js",
        description: <>Building high-performance React applications with Next.js and Vite.</>,
        images: [],
      },
      {
        title: "🎨 Tailwind CSS",
        description: <>Crafting responsive and modern UI designs.</>,
        images: [],
      },
      {
        title: "🐘 PostgreSQL",
        description: <>Efficient database management with Sequelize ORM.</>,
        images: [],
      },
      {
        title: "🟩 Node.js",
        description: <>Building RESTful APIs and microservices.</>,
        images: [],
      },
      {
        title: "🖌️ Figma",
        description: <>Designing user-friendly interfaces and prototypes.</>,
        images: [],
      },
      {
        title: "🔧 Git & GitHub",
        description: <>Version control and collaboration on projects.</>,
        images: [],
      },
      {
        title: "📈 Agile Methodologies",
        description: <>Experience with Scrum and Kanban.</>,
        images: [],
      },
      {
        title: "🚀 CI/CD",
        description: <>Continuous Integration and Deployment with GitHub Actions.</>,
        images: [],
      },
      {
        title: "🧪 Testing",
        description: <>Unit and integration testing with Jest and Cypress.</>,
        images: [],
      },
      {
        title: "⚡ Web Performance",
        description: <>Optimizing web applications for speed and efficiency.</>,
        images: [],
      },
      {
        title: "🔍 SEO",
        description: <>Implementing best practices for search engine optimization.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about frontend development and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My Projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My Photo Gallery",
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
