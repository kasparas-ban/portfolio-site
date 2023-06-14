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
    </div>
  )
}
