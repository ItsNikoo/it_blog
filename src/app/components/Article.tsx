'use client'

import {useParams} from "next/navigation"

export default function Article() {
  const params = useParams<{ id: string }>()
  return (
    <div>
      <h1>Пост {params.id}</h1>
    </div>
  )
}