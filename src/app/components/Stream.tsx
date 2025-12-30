'use client'

import {useParams} from "next/navigation"

export default function Stream() {
  const params = useParams<{ stream: string }>()

  return (
    <div>
      <h1>Поток {params.stream}</h1>
    </div>
  )
}