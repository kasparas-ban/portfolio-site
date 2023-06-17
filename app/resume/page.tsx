import { experienceData } from "@/lib/data"

export default function Page() {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="mb-1 font-title text-4xl font-bold dark:text-gray-300">Resume</h1>
      <p className="mb-4 dark:text-gray-300 text-sm">Last updated: Jun 2023</p>

      <div className="inline-flex w-full mb-4 items-center justify-center">
        <hr className="my-8 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
        <span className="absolute bg-white px-3 text-2xl font-medium text-gray-900 dark:bg-[#111010] dark:text-gray-300">
          Work experience
        </span>
      </div>

      {experienceData.map(work => (
        <WorkExperience work={work} key={work.period} />
      ))}

      <div className="inline-flex w-full mb-4 items-center justify-center">
        <hr className="my-8 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
        <span className="absolute bg-white px-3 text-2xl font-medium text-gray-900 dark:bg-[#111010] dark:text-gray-300">
          Education
        </span>
      </div>
      <div className="flex items-center">
        <div className="text-lg font-bold dark:text-gray-300">University of Glasgow</div>
        <div className="ml-auto dark:text-gray-300">2016 - 2021</div>
      </div>
      <div className="dark:text-gray-300">MSci, Physics and Computing Science</div>
    </div>
  )
}

function WorkExperience({ work }: { work: WorkExperience }) {
  return (
    <div className="mb-8">
      <div className="flex sm:items-center max-sm:flex-col">
        <div className="text-xl font-bold dark:text-gray-200">{work.title}</div>
        <div className="sm:ml-auto dark:text-gray-300">{work.period}</div>
      </div>
      <div className="font-medium dark:text-gray-200">{work.company}</div>
      <ul className="space-y-2 text-justify text-gray-500 mt-3 list-disc list-inside dark:text-gray-400">
        {work.description.map(bullet => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}