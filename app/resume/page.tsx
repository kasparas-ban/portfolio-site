interface WorkExperience {
  title: string
  company: string
  period: string
  duration: string
  description: string[]
}

const experienceData: WorkExperience[] = [
  {
    title: 'Front-End Developer',
    company: 'Horion Digital',
    period: 'Feb 2023 - Now',
    duration: '2 months',
    description: [
      'Worked on a popular sports betting site that has a large user base all over the world.',
      'Maintained and implemented new features for the main betting website and internal tools used by the teams inside the company.',
      'Moved parts of backend API from RethinkDB and MySQL to MongoDB using Prisma and Node.js',
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
    title: 'Junior Front-End Developer',
    company: 'Unify Square',
    period: 'Oct 2021 - Aug 2022',
    duration: '11 mos',
    description: [
      'I worked on the PowerSuite app - a monitoring tool used by large corporations to manage communications between their employees.',
      'I was tasked to develop new front-end features, such as tables, forms, form validation, and various monitoring info pages in an extensive codebase.',
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
      "All the development and research were done independently.",
      'Functionalities of the app included: precise drawing of simple shapes using Android Canvas API, saving and storing the drawn shapes in memory where they could later be accessed and edited, superposing the shapes on an active camera image, including manual control sliders to adjust camera focus and zoom.',
      'The app was finished, all the requested features were implemented and presented to the customer.',
    ],
  },
];

export default function Page() {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="mb-4 font-title text-4xl font-bold">Resume</h1>

      <div className="inline-flex w-full items-center justify-center">
        <hr className="my-8 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
        <span className="absolute bg-white px-3 text-2xl font-medium text-gray-900 dark:bg-gray-900 dark:text-white">
          Work experience
        </span>
      </div>
      {experienceData.map(work => (
        <WorkExperience work={work} />
      ))}

      <div className="inline-flex w-full items-center justify-center">
        <hr className="my-8 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
        <span className="absolute bg-white px-3 text-2xl font-medium text-gray-900 dark:bg-gray-900 dark:text-white">
          Education
        </span>
      </div>
      <div className="flex items-end">
        <div className="text-lg font-bold">University of Glasgow</div>
        <div className="ml-auto">2016 - 2021</div>
      </div>
      <div>MSci, Physics and Computing Science</div>
    </div>
  )
}

function WorkExperience({ work }: { work: WorkExperience }) {
  return (
    <div className="mb-8">
      <div className="flex items-end">
        <div className="text-xl font-bold">{work.title}</div>
        <div className="ml-auto">{work.period}</div>
      </div>
      <div>{work.company}</div>
      <ul className="space-y-2 text-justify text-gray-500 mt-3 list-disc list-inside dark:text-gray-400">
        {work.description.map(bullet => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}