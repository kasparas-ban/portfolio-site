import { experienceData } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Previous work experience.',
}

export default function Page() {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="mb-1 font-title text-4xl font-bold dark:text-gray-300">
        Resume
      </h1>
      <p className="mb-4 text-sm dark:text-gray-300">Last updated: June 2023</p>

      <div className="mb-4 inline-flex w-full items-center justify-center">
        <hr className="my-8 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
        <span className="absolute bg-white px-3 font-title text-2xl font-medium text-gray-900 dark:bg-[#111010] dark:text-gray-300">
          Work experience
        </span>
      </div>

      {experienceData.map((work) => (
        <WorkExperience work={work} key={work.period} />
      ))}

      <div className="mb-4 inline-flex w-full items-center justify-center">
        <hr className="my-8 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
        <span className="absolute bg-white px-3 font-title text-2xl font-medium text-gray-900 dark:bg-[#111010] dark:text-gray-300">
          Education
        </span>
      </div>
      <div className="flex items-center">
        <div className="font-title text-lg font-bold dark:text-gray-300">
          University of Glasgow
        </div>
        <div className="ml-auto font-title dark:text-gray-300">2016 - 2021</div>
      </div>
      <div className="dark:text-gray-300">
        MSci, Physics and Computing Science
      </div>
    </div>
  )
}

function WorkExperience({ work }: { work: WorkExperience }) {
  return (
    <div className="mb-8">
      <div className="flex max-sm:flex-col sm:items-center">
        <div className="font-title text-xl font-bold dark:text-gray-200">
          {work.title}
        </div>
        <div className="font-title dark:text-gray-300 sm:ml-auto">
          {work.period}
        </div>
      </div>
      <div className="font-title font-medium dark:text-gray-200">
        {work.company}
      </div>
      <ul className="mt-3 list-inside list-disc space-y-2 text-justify text-gray-500 dark:text-gray-400">
        {work.description.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
