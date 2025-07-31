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
  display: true,
  // title: <>Get in Touch with {person.firstName}</ >,
  title: <>Get in Touch</ >,
  description: (
    <>
      Want to chat about a project, collaboration, or just say hi? Feel free to reach out — I’m always open to new ideas and connections!
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
  {
    name: "Orcid",
    icon: "orcid",
    link: "https://orcid.org/0009-0006-3392-720X",
  }
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend Developer & Tech Enthusiast</>,
  subline: (
    <>
      {/* I'm Viana, a Frontend Developer at <InlineCode>MG TECH</InlineCode>, crafting intuitive and responsive user interfaces. */}
      I’m Viana — I used to build elegant interfaces as a frontend dev... now I break them (strategically) as a QA analyst. Same code, different superpowers!    </>
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
  "work": {
    "display": true,
    "title": "Work Experience",
    "experiences": [
      {
        "company": "Ultra LIMS",
        "timeframe": "Nov 2024 - Present",
        "role": "Quality Assurance Analyst",
        "achievements": [
          "Collaborated closely with developers and stakeholders to identify, document, and resolve bugs early in the development cycle.",
          "Participated in Agile ceremonies, including sprint planning and retrospectives, to ensure alignment with project goals.",
          "Contributed technical knowledge to enhance the QA process and bridge communication between QA and development teams.",
          "Created and executed comprehensive test cases to ensure software reliability and adherence to business requirements.",
          "Implemented CI/CD pipelines to automate testing and deployment processes, ensuring rapid feedback and delivery.",
          "Utilized Cypress and other tools for automated testing, improving test coverage and efficiency.",
          "Docker for containerization and environment consistency.",
          "Jira for issue tracking and project management.",
          "GitHub for version control and collaboration.",
        ],
        "images": []
      },
      {
        "company": "Freelance Projects",
        "timeframe": "2022 - Present",
        "role": "Fullstack Developer",
        "achievements": [
          "Built fully customized e-commerce platforms and conversion-focused landing pages tailored to diverse business needs.",
          "Integrated third-party APIs, payment gateways, and automation tools to enhance the capabilities and efficiency of client projects.",
          "Managed the entire development cycle — from requirement analysis to deployment — ensuring timely and high-quality deliveries.",
          "Developed and optimized high-performance user interface components using React and Tailwind CSS, ensuring seamless performance and maintainability.",
          "Implemented advanced responsive design techniques, resulting in consistent and intuitive user experiences across all screen sizes.",
          "Collaborated closely with designers and backend developers to align functionality with modern UI/UX standards."
        ],
        "images": []
      },
      {
        "company": "Emer Soluções Médicas",
        "timeframe": "Nov 2023 - Nov 2024",
        "role": "Full Stack Development Intern",
        "achievements": [
          "Developed and integrated backend systems with TypeScript (Express, Prisma) for split payments with Stripe, ensuring secure international transactions.",
          "Performed custom queries and updates on a NoSQL database (MongoDB), optimizing data structure and integrity.",
          "Version control and code hosting using Git and GitHub.",
          "Created UX/UI-focused interfaces for the company’s website, enhancing overall user experience."
        ],
        "images": []
      }
    ]
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Senac Joinville College",
        description: <>(2023/01 - 2025/06)<br />Studied Analysis and Systems Development.</>,
      },
      {
        name: "Udemy & Alura",
        description: <>Courses on React, Node.js, and Web Development.</>,
      },
      {
        name: "FIAP",
        description:
          <>
            DevOps & Agile Culture: <br />
            <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/134228/331695948a5bad29bdd557b17cc3cbd0/certificado.png" target="_blank" rel="noopener noreferrer">
              <code>Show credential</code>
            </a>
          </>
      },
    ],
  },
  "technical": {
    "display": true,
    "title": "Technical Skills",
    "skills": [
      {
        "title": "⚛️ React.js",
        "description": "Developing dynamic and scalable interfaces using React.js with modern tools like Next.js and Vite.",
        "images": []
      },
      {
        "title": "🎨 Tailwind CSS",
        "description": "Designing clean, responsive, and maintainable UIs with utility-first CSS.",
        "images": []
      },
      {
        "title": "🐘 PostgreSQL",
        "description": "Managing relational data efficiently using Sequelize ORM and PostgreSQL best practices.",
        "images": []
      },
      {
        "title": "🟩 Node.js",
        "description": "Building robust RESTful APIs and scalable backend services with Express.js.",
        "images": []
      },
      {
        "title": "🖌️ Figma",
        "description": "Creating intuitive UI/UX prototypes and collaborating effectively with design teams.",
        "images": []
      },
      {
        "title": "🔧 Git & GitHub",
        "description": "Ensuring effective version control and team collaboration through Git workflows and GitHub.",
        "images": []
      },
      {
        "title": "📈 Agile Methodologies",
        "description": "Applying Scrum and Kanban frameworks to deliver features with efficiency and flexibility.",
        "images": []
      },
      {
        "title": "🚀 CI/CD",
        "description": "Automating build, test, and deployment pipelines using GitHub Actions and other CI/CD tools.",
        "images": []
      },
      {
        "title": "🧪 Testing",
        "description": "Writing unit and integration tests with Jest and Cypress to ensure code reliability.",
        "images": []
      },
      {
        "title": "⚡ Web Performance",
        "description": "Optimizing web applications for fast load times, smooth interactions, and reduced resource usage.",
        "images": []
      },
      {
        "title": "🔍 SEO",
        "description": "Implementing technical SEO strategies to improve visibility and search engine ranking.",
        "images": []
      }
    ]
  }
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
