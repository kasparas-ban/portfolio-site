'use client'

import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function VisitorCounter() {
  const { data } = useSWR('/api/visitors', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const visitorCount = data?.count

  return (
    <>
      {visitorCount !== undefined ? (
        <p className="dark:text-gray-400">
          You are <span className="mr-0.5 text-3xl dark:text-gray-300 font-title">{visitorCount}</span>{getNumberEnding(visitorCount)}{` `}
          visitor.
        </p>
      ) : null}
    </>
  )
}

function getNumberEnding(count: number) {
  if (count.toString().at(-1) === '1') {
    return 'st'
  }
  if (count.toString().at(-2) === '2') {
    return 'nd'
  }
  if (count.toString().at(-1) === '3') {
    return 'rd'
  }
  return 'th'
}