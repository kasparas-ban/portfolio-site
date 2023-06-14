import { getVisitorCount } from '@/lib/metrics'

export const revalidate = 60

export default async function Home() {
  let visitorCount

  await getVisitorCount()
    .then((res) => (visitorCount = res))
    .catch((e) => console.error(e))

  return (
    <div className="flex flex-col justify-between">
      <h1 className="font-title text-4xl font-bold">Kasparas Baniulis</h1>
      <p className="mb-4 text-2xl">Frontend developer</p>
      <p className="mb-8">
        Hi, I&apos;m Kasparas. I do frontend work for a living and many other
        things on the side.
      </p>
      <p className="">
        You are <span className="mr-0.5 text-3xl">{visitorCount}</span>th
        visitor.
      </p>
      {/* <h5 className="mb-2 text-xl">Contact</h5>
      <ContactForm /> */}
    </div>
  )
}

function ContactForm() {
  return (
    <form>
      <label
        htmlFor="email"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <div className="relative mb-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <input
          type="text"
          id="email"
          className="block w-full rounded-md border border-gray-300 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@email.com"
        />
      </div>
      <label
        htmlFor="message"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Enter your message
      </label>
      <textarea
        id="message"
        rows={4}
        className="block w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Write your message here..."
      ></textarea>
      <button
        type="submit"
        className="mt-3 rounded-md border border-gray-300 px-6 py-2.5 text-center text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Send
      </button>
    </form>
  )
}
