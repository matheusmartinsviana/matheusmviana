
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
        "company": "TOTVS S.A.",
        "timeframe": "Ago 2025 - Present",
        "role": "Quality Assurance Analyst",
        "achievements": [
          "Conducted thorough testing of web applications to identify and document bugs, ensuring high-quality releases.",
          "Utilized automated testing tools to streamline the QA process, reducing manual effort and increasing efficiency.",
        ],
        "images": []
      },
      {
        "company": "Ultra LIMS",
        "timeframe": "Nov 2024 - Jul 2025",
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
        "title": "Cypress",
        "description": "Strong experience in end-to-end testing automation using Cypress, ensuring software reliability, performance, and regression coverage.",
        "images": []
      },
      {
        "title": "JavaScript & TypeScript",
        "description": "Advanced knowledge of modern JavaScript and TypeScript for building scalable applications, backend APIs, and automation tools.",
        "images": []
      },
      {
        "title": "React.js & Next.js",
        "description": "Developing dynamic, responsive interfaces with React and Next.js, applying component-based architecture and optimized rendering strategies.",
        "images": []
      },
      {
        "title": "Node.js & Express",
        "description": "Designing and maintaining RESTful APIs with Node.js (Express) for reliable and secure backend communication.",
        "images": []
      },
      {
        "title": "SQL Databases",
        "description": "Experienced in database design and maintenance using PostgreSQL and MySQL for structured and scalable data management.",
        "images": []
      },
      {
        "title": "Test Automation & QA",
        "description": "Skilled in creating and executing automated test cases and scripts, applying QA methodologies to enhance reliability and user experience.",
        "images": []
      },
      {
        "title": "Agile Methodologies",
        "description": "Applying Scrum and Kanban frameworks to deliver efficient, value-driven iterations aligned with business goals.",
        "images": []
      },
      {
        "title": "Git & GitHub",
        "description": "Expertise in version control, branching strategies, and collaborative workflows for clean and maintainable codebases.",
        "images": []
      },
      {
        "title": "CI/CD Pipelines",
        "description": "Automating build, testing, and deployment workflows with GitHub Actions and continuous integration tools.",
        "images": []
      },
      {
        "title": "UX/UI Design",
        "description": "Building user-friendly interfaces and prototypes in Figma, integrating front-end feedback loops to improve usability.",
        "images": []
      },
      {
        "title": "Web Performance Optimization",
        "description": "Enhancing web applications for speed, responsiveness, and accessibility across devices.",
        "images": []
      },
      {
        "title": "API Testing & Integration",
        "description": "Validating and automating API endpoints for robust data exchange between systems, ensuring high reliability and accuracy.",
        "images": []
      },
      {
        "title": "Continuous Improvement",
        "description": "Driving QA and development process improvements to increase testing efficiency, maintainability, and delivery quality.",
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
  images: [
    { src: '/images/gallery/img-01.webp', alt: 'Apresentação final do curso de Análise e Desenvolvimento de Sistemas' },
    { src: '/images/gallery/img-02.webp', alt: 'Competição de Empreendedorismo Reuni Challenge 2023 em Lages (2º lugar conquistado)' },
    { src: '/images/gallery/img-03.webp', alt: 'Apresentação de pitch no evento Ágora Connect 2024 — foco em empreendedorismo e EdTech' },
    { src: '/images/gallery/img-04.webp', alt: 'Pitch EpicAI — parceria TOTVS e Senac (1º lugar conquistado com o projeto EpicAI)' },
    { src: '/images/gallery/img-05.webp', alt: 'Participação na Expoinovação 2023' },
    { src: '/images/gallery/img-06.webp', alt: 'Home office setup — ambiente de trabalho e desenvolvimento remoto' },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };

