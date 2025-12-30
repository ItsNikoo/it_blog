'use client'

import {useParams} from "next/dist/client/components/navigation"

export default function Profile() {
  const params = useParams<{ username: string }>()
  return (
    <div>
      <h1>Profile @{params.username}</h1>
    </div>
  )
}