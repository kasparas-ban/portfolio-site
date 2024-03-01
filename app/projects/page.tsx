import clsx from 'clsx'
import { Metadata } from 'next'
import { projectsData } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Previous projects I've worked on.",
}

export default function Page() {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="mb-8 font-title text-4xl font-bold dark:text-gray-300">
        Projects
      </h1>
      <div className="flex flex-col gap-4">
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.githubLink} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-600 dark:bg-gray-800 md:max-w-xl md:flex-row">
      <div className="flex flex-col justify-between p-4 pb-3 leading-normal">
        <div className="mb-2 flex flex-col sm:flex-row">
          <h5 className="font-title text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
          {project.inProgress && (
            <span className="mt-0.5 h-fit w-fit rounded-md border border-gray-300 px-2 py-1 text-center text-xs font-semibold text-gray-600 dark:text-gray-200 sm:ml-3">
              in progress
            </span>
          )}
        </div>
        <p
          className={clsx(
            'mb-3 text-sm font-normal [&>a]:font-semibold',
            'text-gray-700 [&>a:hover]:text-slate-400 [&>a]:text-slate-600',
            'dark:text-slate-300 [@media(prefers-color-scheme:dark){&>a:hover}]:text-slate-300 [@media(prefers-color-scheme:dark){&>a}]:text-slate-200'
          )}
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <div className="mb-1.5 flex flex-wrap items-center gap-2 text-sm font-normal text-gray-700 dark:text-gray-400">
          {project.techUsed.map((tech) => (
            <Tag text={tech} key={tech} />
          ))}
        </div>
        <div className="ml-1 flex gap-4">
          {project.projectLink && <ProjectButton link={project.projectLink} />}
          <GithubButton
            link={project.githubLink}
            isPrivate={project.isPrivate}
          />
        </div>
      </div>
    </div>
  )
}

function Tag({ text }: { text: string }) {
  return (
    <div className="flex w-fit items-center justify-center rounded-md bg-slate-200 px-2 py-1">
      <span className="text-sm font-semibold dark:text-gray-500">{text}</span>
    </div>
  )
}

function GithubButton({
  link,
  isPrivate,
}: {
  link: string
  isPrivate?: boolean
}) {
  return (
    <>
      <a
        target="_blank"
        className={clsx(
          'relative flex cursor-pointer items-center justify-center rounded-md py-1 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100',
          isPrivate && 'pointer-events-none'
        )}
      >
        <div>
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 96"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="ml-1 text-sm font-semibold">GitHub</span>
        {isPrivate && (
          <div className="absolute left-0 right-0 h-[2px] bg-gray-600 dark:bg-gray-300" />
        )}
      </a>
      {isPrivate && (
        <span className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-300">
          Private
        </span>
      )}
    </>
  )
}

function ProjectButton({ link }: { link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex cursor-pointer items-center justify-center rounded-md py-1 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
    >
      <div className="h-4 w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </div>
      <span className="ml-1 text-sm font-semibold">Project</span>
    </a>
  )
}
