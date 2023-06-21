import ContactModal from './ContactModal'
import VisitorCounter from './VisitorCounter'

export default async function Home() {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="font-title text-4xl font-bold dark:text-gray-200">Kasparas Baniulis</h1>
      <p className="mb-4 font-title text-lg font-medium dark:text-gray-200">Frontend developer</p>
      <p className="mb-4 dark:text-gray-400">
        Hi, I&apos;m Kasparas. I do frontend work for a living and many other
        things on the side.
      </p>
      <ContactModal />
      <VisitorCounter />
    </div>
  )
}