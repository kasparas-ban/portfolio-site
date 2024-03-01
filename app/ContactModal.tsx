'use client'

import clsx from 'clsx'
import { FormEvent, MutableRefObject, useRef, useState } from 'react'

export default function ContactModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const [toastVisible, setToastVisible] = useState(false)
  const [toastStatus, setToastStatus] = useState(false)

  const showToast = (success: boolean) => {
    setToastVisible(true)
    setToastStatus(success)
    setTimeout(() => setToastVisible(false), 4000)
  }

  return (
    <>
      <button
        className="mb-4 w-fit rounded-lg border border-gray-300 px-3 py-1 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        onClick={() => dialogRef.current?.showModal()}
      >
        Contact me
      </button>
      <dialog
        ref={dialogRef}
        className="dark:border dark:border-gray-100 dark:bg-gray-900"
      >
        <h5 className="mb-2 text-center text-4xl dark:text-gray-100">
          Contact me
        </h5>
        <ContactForm dialogRef={dialogRef} showToast={showToast} />
      </dialog>
      {toastVisible && (
        <StatusToast
          success={toastStatus}
          handleClose={() => setToastVisible(false)}
        />
      )}
    </>
  )
}

function StatusToast({
  success,
  handleClose,
}: {
  success: boolean
  handleClose: () => void
}) {
  const toastRef = useRef<HTMLDivElement>(null)
  const statusMessage = success
    ? 'Your message has been sent.'
    : 'Something bad happened and your message was not sent. Try again later?'

  return (
    <div
      id="toast-default"
      ref={toastRef}
      className="absolute right-2.5 top-2.5 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
      role="alert"
    >
      <div
        className={clsx(
          'ml-3 text-sm font-normal',
          success ? 'text-green-700' : 'text-red-700'
        )}
      >
        {statusMessage}
      </div>
      <button
        type="button"
        onClick={handleClose}
        className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only">Close</span>
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}

function ContactForm({
  dialogRef,
  showToast,
}: {
  dialogRef: MutableRefObject<HTMLDialogElement | null>
  showToast: (success: boolean) => void
}) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify({ email, message }),
    })
      .then(() => {
        setEmail('')
        setMessage('')
        setLoading(false)
        dialogRef.current?.close()
        showToast(true)
      })
      .catch(() => {
        setLoading(false)
        showToast(false)
      })
  }

  return (
    <form method="dialog" onSubmit={handleSubmit}>
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
          type="email"
          id="email"
          name="email"
          className="block w-full rounded-md border border-gray-300 p-2.5 pl-10 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          placeholder="name@email.com"
          onChange={(e) => setEmail(e.target.value)}
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
        name="message"
        rows={4}
        className="block w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        placeholder="Write your message here..."
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div className="flex justify-end gap-2">
        <button
          className="mt-3 rounded-md border border-gray-300 px-6 py-2.5 text-center text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          onClick={(e) => {
            e.preventDefault()
            dialogRef.current?.close()
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={clsx(
            'mt-3 flex items-center rounded-md border border-gray-500 bg-gray-700 text-center text-sm font-medium text-gray-100 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-100 disabled:opacity-25 disabled:hover:bg-gray-700 dark:border-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800',
            loading ? 'px-4 py-2' : 'px-6 py-2.5'
          )}
          disabled={!email || !message || loading}
        >
          {loading && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 h-6 w-6 animate-spin fill-gray-900 text-gray-200 dark:text-gray-900"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )}
          Send
        </button>
      </div>
    </form>
  )
}
