import { oldAgeCount } from "@/utils/functions/oldAgeCount";

type TDataItem = {
  label: string;
  heading?: string;
  period?: string;
  description?: string;
  nonInteractable?: boolean;
};

type TDataStructure = {
  introduction: {
    items: TDataItem[];
  };
  experience: {
    items: TDataItem[];
  };
  skills: {
    items: TDataItem[];
  };
};

export const DATA: TDataStructure = {
  introduction: {
    items: [
      {
        label:
          "Hello! I'm Roman Pavlenko, a <green>passionate</green> software engineer from Ukraine",
        nonInteractable: true,
        description: `Hello, my name is Roman. I'm ${oldAgeCount()} years old developer from Ukraine.\n I work as a frontend developer, and code stuff in my free time.\n Learning multiple things and feel this is not enough for me. Right now working on C and in parallel learning Gdscript, because I want to create hardware, and I have ideas and vision for my own video game\nLove to read books, movies and video games.\n `,
      },
    ],
  },
  experience: {
    items: [
      {
        label: "Sinova.dev",
        heading:
          "Front-end developer. <purple>Next.js</purple>, <yellow>Chrome Extensions</yellow>",
        period: "November 2024 - Now",
        description:
          "I’m currently working at Sinova.dev, developing websites, web apps, and Chrome extensions.\n My main focus is on Chrome extensions — from simple internal tools that automate company processes to Chrome Web Store products that generate profits for clients.\n I’ve learned a great deal about extension development and software engineering in general, and I’m enjoying being part of the team.",
      },
      {
        label: "NCDev agency",
        heading:
          "Front-end developer. <green>React</green>, <purple>Next.js</purple>, <yellow>Chrome Extensions</yellow>, Bubble",
        period: "August 2023 - October 2024",
        description:
          "I had a great time working with this company.\n It was my first job in a small business, and I gained experience across various fields, including healthcare, education, e-commerce, and finance.\n I worked on several memorable projects, such as developing a Chrome extension that allowed no-code developers to create and reuse their own library of components, and implementing a CRM system. For the CRM, the company needed accounting functionality, so I integrated it with an existing API and built a robust system capable of handling large volumes of data.",
      },
      {
        label: "Freelance",
        heading:
          "Front-end developer. Wordpress, Elementor, <red>HTML</red>, <blue>CSS</blue>",
        period: "August 2020 - January 2022",
        description:
          "As I was young and inexperienced, I met a friend in uni. I knew basic HTML and CSS, and he encouraged me to learn more.\n Together we were working on a freelance platform making all kinds of stuff: Landing pages, marketplaces, custom WordPress themes.\n Was fun, glad that i had that experience",
      },
    ],
  },
  skills: {
    items: [
      {
        label: "Next.js",
        heading: "React Framework",
        description:
          "My go-to framework for building modern web applications.\n I love its full-stack capabilities, server-side rendering, and seamless deployment. The file-based routing system is intuitive, and the built-in optimizations make performance a breeze.\n It's like having a Swiss Army knife for web development that handles everything from static sites to complex applications.",
      },
      {
        label: "Typescript",
        heading: "Typed JavaScript",
        description:
          "JavaScript with superpowers.\n The static typing catches bugs before they reach production, and the enhanced IDE support makes coding a breeze. I appreciate how it scales with large codebases and provides excellent documentation through types. Once you go TypeScript, you never go back - it's that transformative.",
      },
      {
        label: "Node.js",
        heading: "JavaScript Runtime",
        description:
          "JavaScript everywhere.\n I use it for building APIs and backend services. The event-driven, non-blocking I/O model is perfect for scalable applications. The npm ecosystem is extensive, and the community is incredibly active and supportive.",
      },
      {
        label: "React",
        heading: "UI Library",
        description:
          "The library that changed how I think about building user interfaces. Component-based architecture, virtual DOM, and a massive ecosystem make it my foundation for modern web development. I love how it encourages reusable components and declarative programming. The hooks system revolutionized state management for me.",
      },
      {
        label: "HTML",
        heading: "Markup Language",
        description:
          "The backbone of every web page. Simple, semantic, and essential. I believe in writing clean, accessible HTML that serves both users and search engines. Semantic elements like nav, main, and article make the web more meaningful. It's the foundation that everything else builds upon.",
      },
      {
        label: "CSS",
        heading: "Styling Language",
        description:
          "Where web pages get their personality. I enjoy crafting responsive layouts, smooth animations, and pixel-perfect designs. CSS Grid and Flexbox are my best friends for creating complex layouts. The cascade and specificity rules make it powerful yet sometimes challenging - but that's part of the fun.",
      },
      {
        label: "SASS",
        heading: "CSS Preprocessor",
        description:
          "CSS with superpowers.\n Variables, mixins, and nesting make stylesheets maintainable and DRY. I use it to create organized, scalable stylesheets that are easy to maintain. It's like CSS but with a brain - the compilation process catches errors early and the features save hours of repetitive work.",
      },
      {
        label: "C",
        heading: "Programming Language",
        description:
          "Fast, powerful, and close to the metal. I use it for embedded systems and bare-metal programming where every byte and cycle matters. The manual memory management teaches you to think carefully about resource usage. Improving my skills to build small gadgets.",
      },
      {
        label: "PostgreSQL",
        heading: "Database System",
        description:
          "My preferred relational database. ACID compliance, JSON support, and excellent performance make it incredibly versatile. I love its advanced features like full-text search, JSON operators, and the ability to write stored procedures in multiple languages. It's like having a reliable friend who never forgets anything and can handle any data challenge.",
      },
      {
        label: "GitHub Actions",
        heading: "CI/CD Platform",
        description:
          "Automation magic. I use it to build, test, and deploy code automatically. The YAML-based workflows are easy to understand and maintain. It's like having a tireless assistant who handles all the repetitive tasks - from running tests to deploying to production. The integration with GitHub makes the entire development workflow seamless.",
      },
      {
        label: "Git",
        heading: "Version Control",
        description:
          "The safety net of modern development. I can't imagine coding without it. Branching, merging, and collaboration made simple. Git is my time machine - I can travel back to any point in my code's history, experiment and collaborate with others without conflicts. The distributed nature means I can work offline and sync later.",
      },
      {
        label: "Ai assisted development",
        heading: "Development Tool",
        description:
          "Leveraging AI to boost productivity and solve complex problems. I use AI tools for code generation, debugging, and learning new technologies faster. It's like having a brilliant coding partner who never sleeps and knows everything - from suggesting optimizations to explaining complex concepts. I'm familiar with ChatGPT, Copilot, Gemini, Claude and Cursor. The key is knowing when to trust the AI and when to apply human judgment.",
      },
      {
        label: "Automated testing",
        heading: "Quality Assurance",
        description:
          "Writing tests that catch bugs before users do. I believe in comprehensive testing - unit tests, integration tests, and end-to-end tests. Have grasp on Jest and Cypres. The confidence that comes from a solid test suite is invaluable. Quality is not an accident - it's the result of careful testing, continuous integration, and a commitment to writing maintainable code that works reliably.",
      },
    ],
  },
};

export type { TDataItem, TDataStructure };
