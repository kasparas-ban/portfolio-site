export const experienceData: WorkExperience[] = [
  {
    title: 'Frontend Developer',
    company: 'Horion Digital',
    period: 'Feb 2023 - Now',
    duration: '4 months',
    description: [
      'Worked on multiple projects: on an app that helps an IT business to communicate with their clients, and on a platform for influencer campaign management that helps to validate the business impact of influencer marketing.',
      'Took part in application design, development, and requirement facilitation.',
      'Communicated with different developer teams to ensure quality and to meet aggressive deadlines.',
      'Used React, Redux Toolkit, Node.js, SCSS, and Styled Components.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Kickertech',
    period: 'Dec 2022 - Jan 2023',
    duration: '2 months',
    description: [
      'Worked on a popular sports betting site that has a large user base all over the world.',
      'Maintained and implemented new features for the main betting website and internal tools used by the teams inside the company.',
      'Moved parts of backend API from RethinkDB and MySQL to MongoDB using Prisma and Node.js',
      'Used React, Redux, Node.js, Prisma, MongoDB, RethinkDB, MySQL, SCSS, and Styled Components.',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Unify Square',
    period: 'Oct 2021 - Aug 2022',
    duration: '11 mos',
    description: [
      'I worked on the PowerSuite app - a monitoring tool used by large corporations to manage communications between their employees.',
      'I was tasked to develop new frontend features, such as tables, forms, form validation, and various monitoring info pages in an extensive codebase.',
      'Used Typescript, React, SCSS, Reactstrap, as well as custom UI libraries.',
    ],
  },
  {
    title: 'Junior Researcher',
    company: 'Femtika',
    period: 'Jul 2019 - Aug 2019',
    duration: '2 mos',
    description: [
      'I was working with the software controlling a micro-fabrication workstation, used at manufacturing structures at nano scale.',
      'I was tasked to develop new front-end features, such as tables, forms, form validation, and various monitoring info pages in an extensive codebase.',
      "The sensors were programmed in C language on a PIC16 8bit microcontroller using Microchip MPLab software. It was critical to ensure efficient usage of microcontrollers' memory, as well as making the code compatible with the older versions of the board.",
    ],
  },
  {
    title: 'Android App Developer',
    company: 'Polaris Vision Systems EU Ltd',
    period: 'Jun 2018 - Nov 2018',
    duration: '6 mos',
    description: [
      'I was tasked on creating an app for Android phones that was to be published on Google Play Store.',
      'Given a broad description of the functionality the app would need to have, I was responsible for the technical feasibility assessment, full development of the code, architectural and visual design of the app.',
      'All the development and research were done independently.',
      'Functionalities of the app included: precise drawing of simple shapes using Android Canvas API, saving and storing the drawn shapes in memory where they could later be accessed and edited, superposing the shapes on an active camera image, including manual control sliders to adjust camera focus and zoom.',
      'The app was finished, all the requested features were implemented and presented to the customer.',
    ],
  },
]

export const projectsData: ProjectData[] = [
  {
    title: 'Torch: A React Native App',
    description:
      'Tracks the time you spend pursuing your goals. Includes a Pomodoro timer and various visual aids to track your progress.',
    image: '',
    techUsed: ['React Native', 'Reanimated'],
    githubLink: 'https://github.com/kasparas-ban/torch',
    inProgress: true,
  },
  {
    title: 'Torch: Rewritten in Next.js',
    description: 'Same Torch app rewritten in Next.js',
    image: '',
    techUsed: [
      'Next.js',
      'TailwindCSS',
      'Framer Motion',
      'React Query',
      'shadcn/ui',
      'Zustand',
      'Clerk.js',
    ],
    githubLink: 'https://github.com/kasparas-ban/torch-nextjs',
    projectLink: 'https://torch-app.com',
    inProgress: true,
    isPrivate: true,
  },
  {
    title: 'Torch: goal tracking web app',
    description:
      'Tracks the time you spend pursuing your goals. Includes a Pomodoro timer and various visual aids to track your progress.',
    image: '',
    techUsed: ['React', 'TailwindCSS', 'Framer Motion', 'React Query'],
    githubLink: 'https://github.com/kasparas-ban/torch',
  },
  {
    title: 'Torch API server',
    description:
      'Tracks the time you spend pursuing your goals. Includes a Pomodoro timer and various visual aids to track your progress.',
    image: '',
    techUsed: ['Go', 'Gin', 'testcontainers', 'Docker'],
    githubLink: 'https://github.com/kasparas-ban/torch-server',
    isPrivate: true,
  },
  {
    title: 'Torch DevOps',
    description:
      'Spins up all the neccessary resources for the Torch API server on AWS.',
    image: '',
    techUsed: ['AWS', 'Terraform', 'EC2', 'RDS'],
    githubLink: 'https://github.com/kasparas-ban/torch-devops',
    inProgress: true,
  },
  {
    title: 'Personal website',
    description:
      'A beautifully designed, simple, minimalistic, responsive, dark-mode compatible personal website. You\'re looking at it now. Totally not copied from <a href="https://github.com/leerob/leerob.io" target="__blank">leerob.</a>',
    image: '',
    techUsed: ['Next.js', 'TailwindCSS', 'PlanetScale', 'Vercel'],
    githubLink: 'https://github.com/kasparas-ban/portfolio-site',
    projectLink: '/',
  },
  {
    title: 'Bluedot authentication server',
    description:
      'An authentication server that handles sign-up, confirmation email sending, sign-in, sign-out, and password reset. Uses session-based authentication.',
    image: '',
    techUsed: ['Go', 'Redis', 'MySQL', 'Docker'],
    githubLink: 'https://github.com/kasparas-ban/jwt-auth',
  },
  {
    title: 'Bluedot dashboard',
    description:
      'Frontend interface for the Bluedot social network. Has an interactive globe from iTowns library and various animated panels for information display.',
    image: '',
    techUsed: [
      'React',
      'iTowns',
      'SCSS',
      'Framer Motion',
      'Zustand',
      'React Query',
    ],
    githubLink: 'https://github.com/kasparas-ban/dashboard-frontend',
  },
  {
    title: 'Bluedot sign-up/sign-in app',
    description:
      'Frontend interface for sign-up, sign-in, and password reset. Made to work together with <a href="https://github.com/kasparas-ban/jwt-auth" target="__blank">Bluedot authentication server</a>.',
    image: '',
    techUsed: ['React', 'SCSS', 'React Hook Form', 'Framer Motion'],
    githubLink: 'https://github.com/kasparas-ban/jwt-auth',
  },
  {
    title: 'Authentication server',
    description:
      'An authentication server that handles sign-up, confirmation email sending, sign-in, sign-out, and password reset. Uses JWT-based authentication.',
    image: '',
    techUsed: ['Node.js', 'Express.js', 'MongoDB'],
    githubLink: 'https://github.com/kasparas-ban/auth-server',
  },
  {
    title: 'aruodas.lt scrapper',
    description:
      'Used to routinely scrape newest listings from aruodas.lt and display them on a nice frontend interface.',
    image: '',
    techUsed: ['Node.js', 'React', 'Puppeteer', 'SCSS', 'Firebase', 'Heroku'],
    githubLink: 'https://github.com/kasparas-ban/aruodas-scrapper',
  },
  {
    title: 'Personal blog',
    description:
      'Frontend and backend for a personal blog app. Has a nice design and the function to sort articles according to their category.',
    image: '',
    techUsed: ['Node.js', 'Express.js', 'React', 'SCSS', 'MongoDB'],
    githubLink: 'https://github.com/kasparas-ban/Personal-Blog',
    projectLink: 'https://placidtalk.com',
  },
  {
    title: 'Primitive ray tracer',
    description:
      'A simple ray tracer implemented from scratch using Rust. I wrote an equivalent ray tracer in golang as well - you can find it <a href="https://github.com/kasparas-ban/ray-tracer" target="__blank">here</a>.',
    image: '',
    techUsed: ['Rust'],
    githubLink: 'https://github.com/kasparas-ban/rust_ray_tracer',
  },
  {
    title: 'Rick and Morty Character Database',
    description:
      'A simple frontend app that allows you to view information on the characters of the Rick and Morty show. Uses open <a href="https://rickandmortyapi.com" target="__blank">API</a> for data loading.',
    image: '',
    techUsed: ['React', 'SCSS'],
    githubLink: 'https://github.com/kasparas-ban/rick-morty-character-database',
    projectLink:
      'https://kasparas-ban.github.io/rick-morty-character-database/',
  },
]
